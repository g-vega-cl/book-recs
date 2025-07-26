import { useEffect, useRef } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { AccountTree } from '@mui/icons-material';
import mermaid from 'mermaid';
import './DiagramPage.css';

export default function DiagramPage() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('DiagramPage useEffect started');
    
    // Initialize mermaid with settings that work
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });

    const renderDiagram = async () => {
      if (diagramRef.current) {
        console.log('Starting full decision tree render...');
        
        // Full decision tree matching the original design
        const fullDecisionTree = `
          flowchart TD
            Start([Start]) --> MainQ{Fiction or Non-Fiction?}
            
            %% Fiction Branch
            MainQ -->|Fiction| FicQ{What kind of story?}
            FicQ -->|Light-hearted| LightQ{Sci-fi or coming-of-age?}
            FicQ -->|Visual storytelling| BookLR[Loving Reaper]
            
            LightQ -->|Space adventure| BookHG[The Hitchhikers Guide to the Galaxy]
            LightQ -->|Coming-of-age| BookSB[The Sky Blues]
            
            %% Non-Fiction Branch
            MainQ -->|Non-Fiction| NonFicQ{What interests you most?}
            
            NonFicQ -->|Philosophy| PhilQ{Eastern, western, or modern ethics?}
            NonFicQ -->|Language| LangQ{Emotions, concepts, or storytelling?}
            NonFicQ -->|Essays| EssayQ{Life or economy?}
            NonFicQ -->|How the World Works| WorldQ{Economics or power dynamics?}
            NonFicQ -->|Memoir| BookCB[I Know Why the Caged Bird Sings]
            NonFicQ -->|Business| BookPP[The Pumpkin Plan]
            
            %% Philosophy Branch
            PhilQ -->|Eastern| BookTC[Tao Te Ching]
            PhilQ -->|Western| BookR[The Rebel]
            PhilQ -->|Modern ethics| BookHP[How to Be Perfect]
            
            %% Language Branch
            LangQ -->|Emotions| BookAH[Atlas of the Heart]
            LangQ -->|Concepts| BookDS[The Dictionary of Obscure Sorrows]
            LangQ -->|Storytelling| BookSS[The Science of Storytelling]
            
            %% Essays Branch
            EssayQ -->|Life| BookAR[The Anthropocene Reviewed]
            EssayQ -->|Economy| BookZ[Arguing with Zombies]
            
            %% World Works Branch
            WorldQ -->|Economics| EconQ{Hidden patterns or development?}
            WorldQ -->|Power dynamics| PowerQ{Politics or global systems?}
            
            EconQ -->|Hidden patterns| BookF[Freakonomics]
            EconQ -->|Development| BookPr[The Prosperity Paradox]
            
            PowerQ -->|Politics| BookDH[The Dictators Handbook]
            PowerQ -->|Global systems| BookPW[Principles for Dealing with the Changing World Order]
            PowerQ -->|Authoritarianism| BookDH[The Authoritarians]
            
            %% Style definitions matching original
            classDef bookNode fill:#4a9eff,stroke:#2d7dd2,stroke-width:2px,color:#fff
            classDef questionNode fill:#ff9f40,stroke:#ff7700,stroke-width:2px,color:#fff
            classDef startNode fill:#52c41a,stroke:#389e0d,stroke-width:2px,color:#fff
            
            class BookHG,BookSB,BookLR,BookTC,BookR,BookHP,BookAH,BookDS,BookSS,BookAR,BookZ,BookF,BookPr,BookDH,BookPW,BookCB,BookPP bookNode
            class MainQ,FicQ,LightQ,NonFicQ,PhilQ,LangQ,EssayQ,WorldQ,EconQ,PowerQ questionNode
            class Start startNode
        `;
        
        try {
          // Clear the container first
          diagramRef.current.innerHTML = '';
          
          // Create a unique ID for this render
          const diagramId = `full-decision-tree-${Date.now()}`;
          
          console.log('Rendering full decision tree...');
          const { svg } = await mermaid.render(diagramId, fullDecisionTree.trim());
          console.log('Rendered SVG length:', svg.length);
          
          // Check if rendering was successful
          if (svg && svg.length > 100 && !svg.includes('<g></g>')) {
            diagramRef.current.innerHTML = svg;
            console.log('Full decision tree rendered successfully!');
            
            // Try to add styling after successful render
            setTimeout(() => {
              try {
                console.log('Attempting to add custom styling...');
                const styleSheet = document.createElement('style');
                styleSheet.textContent = `
                  .mermaid-diagram svg {
                    max-width: 100% !important;
                    height: auto !important;
                  }
                  /* Custom node styling to match original */
                  .mermaid-diagram .node rect {
                    rx: 4px !important;
                    ry: 4px !important;
                  }
                `;
                document.head.appendChild(styleSheet);
              } catch (styleError) {
                console.log('Styling failed, but diagram rendered:', styleError);
              }
            }, 100);
            
          } else {
            throw new Error('Empty or invalid SVG generated for full tree');
          }
          
        } catch (error) {
          console.error('Full decision tree failed:', error);
          
          // Fallback to our working simple version
          console.log('Falling back to simple version...');
          const simpleTree = `
            flowchart TD
              Start[Start: Choose Your Book] --> MainQ{Fiction or Non-Fiction?}
              MainQ -->|Fiction| FicBooks[Fiction Recommendations]
              MainQ -->|Non-Fiction| NonFicBooks[Non-Fiction Recommendations]
              
              FicBooks --> BookHG[The Hitchhikers Guide to the Galaxy]
              FicBooks --> BookSB[The Sky Blues]
              FicBooks --> BookLR[Loving Reaper]
              
              NonFicBooks --> BookTC[Tao Te Ching]
              NonFicBooks --> BookAH[Atlas of the Heart]
              NonFicBooks --> BookF[Freakonomics]
              NonFicBooks --> BookAR[The Anthropocene Reviewed]
              NonFicBooks --> BookCB[I Know Why the Caged Bird Sings]
          `;
          
          try {
            const { svg: fallbackSvg } = await mermaid.render('fallback-tree', simpleTree.trim());
            if (fallbackSvg && !fallbackSvg.includes('<g></g>')) {
              diagramRef.current.innerHTML = fallbackSvg;
              console.log('Fallback diagram rendered successfully');
            } else {
              throw new Error('Fallback also failed');
            }
          } catch (fallbackError) {
            console.error('Both attempts failed:', fallbackError);
            diagramRef.current.innerHTML = `
              <div style="text-align: center; padding: 2rem; color: #666;">
                <p>Having trouble rendering the decision tree diagram.</p>
                <p>The diagram structure is quite complex - try refreshing the page.</p>
              </div>
            `;
          }
        }
      }
    };

    renderDiagram();
  }, []);

  return (
    <Box className="diagram-page fade-in">
      <Paper className="diagram-header" elevation={0}>
        <Typography variant="h1" component="h1" className="diagram-title" gutterBottom>
          <AccountTree sx={{ fontSize: 'inherit', mr: 2 }} />
          Decision Tree Diagram
        </Typography>
        <Typography variant="body1" className="diagram-description">
          Visual representation of the book recommendation flow. Follow the paths from start to find your perfect book match.
        </Typography>
      </Paper>
      
      <Paper className="diagram-container" elevation={1}>
        <div ref={diagramRef} className="mermaid-diagram">
          <p style={{ textAlign: 'center', color: '#666' }}>Loading complete decision tree...</p>
        </div>
      </Paper>
    </Box>
  );
}