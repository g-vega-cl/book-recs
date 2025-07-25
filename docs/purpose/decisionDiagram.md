flowchart TD
    Start([Start]) --> MainQ{Fiction or Non-Fiction?}
    
    %% Fiction Branch
    MainQ -->|Fiction| FicQ{What kind of story?}
    FicQ -->|Light-hearted| LightQ{Sci-fi or<br/>coming-of-age?}
    FicQ -->|Visual storytelling| Book_LovingReaper[Loving Reaper]
    
    LightQ -->|Space adventure| Book_Hitchhiker[The Hitchhiker's Guide<br/>to the Galaxy]
    LightQ -->|Coming-of-age| Book_SkyBlues[The Sky Blues]
    
    %% Non-Fiction Branch
    MainQ -->|Non-Fiction| NonFicQ{What interests you most?}
    
    NonFicQ -->|Philosophy| PhilQ{Eastern,<br/>western, or<br/>modern ethics?}
    NonFicQ -->|Language| LangQ{Emotions, concepts,<br/>or storytelling?}
    NonFicQ -->|Essays| EssayQ{Life or<br/>economy?}
    NonFicQ -->|How the World Works| WorldQ{Economics or<br/>power dynamics?}
    NonFicQ -->|Memoir| Book_CagedBird[I Know Why the<br/>Caged Bird Sings]
    NonFicQ -->|Business| Book_PumpkinPlan[The Pumpkin Plan]
    
    %% Philosophy Branch
    PhilQ -->|Eastern| Book_TaoTeChing[Tao Te Ching]
    PhilQ -->|Western| Book_Rebel[The Rebel]
    PhilQ -->|Modern ethics| Book_HowPerfect[How to Be Perfect]
    
    %% Language Branch
    LangQ -->|Emotions| Book_AtlasHeart[Atlas of the Heart]
    LangQ -->|Concepts| Book_ObscureSorrows[The Dictionary of<br/>Obscure Sorrows]
    LangQ -->|Storytelling| Book_ScienceStory[The Science of<br/>Storytelling]
    
    %% Essays Branch
    EssayQ -->|Life| Book_Anthropocene[The Anthropocene<br/>Reviewed]
    EssayQ -->|Economy| Book_Zombies[Arguing with Zombies]
    
    %% How the World Works Branch
    WorldQ -->|Economics| EconQ{Hidden patterns or<br/>development?}
    WorldQ -->|Power dynamics| PowerQ{Politics or<br/>global systems?}
    
    EconQ -->|Hidden patterns| Book_Freakonomics[Freakonomics]
    EconQ -->|Development| Book_Prosperity[The Prosperity Paradox]
    
    PowerQ -->|Politics| Book_Dictator[The Dictator's Handbook]
    PowerQ -->|Global systems| Book_Principles[Principles for Dealing with<br/>the Changing World Order]
    
    %% Style definitions
    classDef bookNode fill:#4a9eff,stroke:#2d7dd2,stroke-width:2px,color:#fff
    classDef questionNode fill:#ff9f40,stroke:#ff7700,stroke-width:2px,color:#fff
    classDef startNode fill:#52c41a,stroke:#389e0d,stroke-width:2px,color:#fff
    
    class Book_Hitchhiker,Book_SkyBlues,Book_LovingReaper,Book_TaoTeChing,Book_Rebel,Book_HowPerfect,Book_AtlasHeart,Book_ObscureSorrows,Book_ScienceStory,Book_Anthropocene,Book_Zombies,Book_Freakonomics,Book_Prosperity,Book_Dictator,Book_Principles,Book_CagedBird,Book_PumpkinPlan bookNode
    class MainQ,FicQ,LightQ,NonFicQ,PhilQ,LangQ,EssayQ,WorldQ,EconQ,PowerQ questionNode
    class Start startNode