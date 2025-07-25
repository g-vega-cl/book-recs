export interface Book {
  title: string;
  description: string;
}

export const books: Record<string, Book> = {
  'Freakonomics': {
    title: 'Freakonomics',
    description: 'The legendary bestseller that made millions look at the world in a radically different way returns in a new edition, now including an exclusive discussion between the authors and bestselling professor of psychology Angela Duckworth.\n\nWhich is more dangerous, a gun or a swimming pool? Which should be feared more: snakes or french fries? Why do sumo wrestlers cheat? In this groundbreaking book, leading economist Steven Levitt—Professor of Economics at the University of Chicago and winner of the American Economic Association\'s John Bates Clark medal for the economist under 40 who has made the greatest contribution to the discipline—reveals that the answers. Joined by acclaimed author and podcast host Stephen J. Dubner, Levitt presents a brilliant—and brilliantly entertaining—account of how incentives of the most hidden sort drive behavior in ways that turn conventional wisdom on its head.'
  },
  
  'The Rebel': {
    title: 'The Rebel',
    description: 'A philosophical exploration of the idea of \'rebellion\' by one of the leading existentialist thinkers, Albert Camus\' The Rebel looks at artistic and political rebels throughout history, from Epicurus to the Marquis de Sade. This Penguin Modern Classics edition is translated by Anthony Bower with an introduction by Oliver Todd.\n\nThe Rebel is Camus\' \'attempt to understand the time I live in\' and a brilliant essay on the nature of human revolt. Published in 1951, it makes a daring critique of communism - how it had gone wrong behind the Iron Curtain and the resulting totalitarian regimes. It questions two events held sacred by the left wing - the French Revolution of 1789 and the Russian Revolution of 1917 - that had resulted, he believed, in terrorism as a political instrument. In this towering intellectual document, Camus argues that hope for the future lies in revolt, which unlike revolution is a spontaneous response to injustice and a chance to achieve change without giving up collective and intellectual freedom.'
  },
  
  'The Anthropocene Reviewed': {
    title: 'The Anthropocene Reviewed',
    description: 'A deeply moving and mind-expanding collection of personal essays in the first ever work of non-fiction from #1 internationally bestselling author John Green\n\nThe Anthropocene is the current geological age, in which human activity has profoundly shaped the planet and its biodiversity. In this remarkable symphony of essays adapted and expanded from his ground-breaking, critically acclaimed podcast, John Green reviews different facets of the human-centered planet - from the QWERTY keyboard and Halley\'s Comet to Penguins of Madagascar - on a five-star scale.\n\nComplex and rich with detail, the Anthropocene\'s reviews have been praised as \'observations that double as exercises in memoiristic empathy\', with over 10 million lifetime downloads. John Green\'s gift for storytelling shines throughout this artfully curated collection about the shared human experience; it includes beloved essays along with six all-new pieces exclusive to the book.'
  },
  
  'The Dictionary of Obscure Sorrows': {
    title: 'The Dictionary of Obscure Sorrows',
    description: '"It\'s undeniably thrilling to find words for our strangest feelings…Koenig casts light into lonely corners of human experience…An enchanting book. " —The Washington Post\n\nA truly original book in every sense of the word, The Dictionary of Obscure Sorrows poetically defines emotions that we all feel but don\'t have the words to express—until now.\n\nHave you ever wondered about the lives of each person you pass on the street, realizing that everyone is the main character in their own story, each living a life as vivid and complex as your own? That feeling has a name: "sonder." Or maybe you\'ve watched a thunderstorm roll in and felt a primal hunger for disaster, hoping it would shake up your life. That\'s called "lachesism." Or you were looking through old photos and felt a pang of nostalgia for a time you\'ve never actually experienced. That\'s "anemoia."'
  },
  
  'The Dictator\'s Handbook': {
    title: 'The Dictator\'s Handbook: Why Bad Behavior Is Almost Always Good Politics',
    description: 'For eighteen years, Bruce Bueno de Mesquita and Alastair Smith have been part of a team revolutionizing the study of politics by turning conventional wisdom on its head. They start from a single assertion: Leaders do whatever keeps them in power. They don\'t care about the "national interest"—or even their subjects—unless they have to. This clever and accessible book shows that the difference between tyrants and democrats is just a convenient fiction. Governments do not differ in kind but only in the number of essential supporters, or backs that need scratching. The size of this group determines almost everything about politics: what leaders can get away with, and the quality of life or misery under them. The picture the authors paint is not pretty. But it just may be the truth, which is a good starting point for anyone seeking to improve human governance.'
  },
  
  'The Hitchhiker\'s Guide to the Galaxy': {
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    description: 'Seconds before the Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker\'s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor.\n\nTogether this dynamic pair begin a journey through space aided by quotes from The Hitchhiker\'s Guide ("A towel is about the most massively useful thing an interstellar hitchhiker can have") and a galaxy-full of fellow travelers: Zaphod Beeblebrox--the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian, Zaphod\'s girlfriend (formally Tricia McMillan), whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; Veet Voojagig, a former graduate student who is obsessed with the disappearance of all the ballpoint pens he bought over the years.'
  },
  
  'The Prosperity Paradox': {
    title: 'The Prosperity Paradox: How Innovation Can Lift Nations Out of Poverty',
    description: 'Clayton M. Christensen, the author of such business classics as The Innovator\'s Dilemma and the New York Times bestseller How Will You Measure Your Life, and co-authors Efosa Ojomo and Karen Dillon reveal why so many investments in economic development fail to generate sustainable prosperity, and offers a groundbreaking solution for true and lasting change.\n\nGlobal poverty is one of the world\'s most vexing problems. For decades, we\'ve assumed smart, well-intentioned people will eventually be able to change the economic trajectory of poor countries. From education to healthcare, infrastructure to eradicating corruption, too many solutions rely on trial and error. Essentially, the plan is often to identify areas that need help, flood them with resources, and hope to see change over time.\n\nBut hope is not an effective strategy.'
  },
  
  'Loving Reaper': {
    title: 'Loving Reaper',
    description: 'Our beautiful planet is home to 8.7 million species. Animals that walk, crawl, fly, swim, and all of which, in one way or another, enrich our daily lives.\n\nWhether it\'s watching a football game with your dog, the first time your eyes meet those of a fox in the forest, or the warmth and purring provided by that cat you took in. Our lives are affected by exchanges with our animal companions, whether domestic or wild.\n\nWith these comics, the author wants to show the diversity and beauty of the animal world, but above all to denounce the human behavior that we should no longer see, ever.\n\nWe\'re not going to lie to you, these are incredibly sad stories and it is likely that some of them will touch you. But they are also stories of hope, because every tear you shed means that these animals matter to you, and that you will take care of those who are lucky enough to cross your path.'
  },
  
  'How to Be Perfect': {
    title: 'How to Be Perfect: The Correct Answer to Every Moral Question',
    description: 'From the creator of The Good Place and the cocreator of Parks and Recreation, a hilarious, thought-provoking guide to living an ethical life, drawing on 2,500 years of deep thinking from around the world.\n\nMost people think of themselves as "good," but it\'s not always easy to determine what\'s "good" or "bad"—especially in a world filled with complicated choices and pitfalls and booby traps and bad advice. Fortunately, many smart philosophers have been pondering this conundrum for millennia and they have guidance for us. With bright wit and deep insight, How to Be Perfect explains concepts like deontology, utilitarianism, existentialism, ubuntu, and more so we can sound cool at parties and become better people.'
  },
  
  'Atlas of the Heart': {
    title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
    description: 'In Atlas of the Heart, Brown takes us on a journey through eighty-seven of the emotions and experiences that define what it means to be human. As she maps the necessary skills and an actionable framework for meaningful connection, she gives us the language and tools to access a universe of new choices and second chances—a universe where we can share and steward the stories of our bravest and most heartbreaking moments with one another in a way that builds connection.\n\nOver the past two decades, Brown\'s extensive research into the experiences that make us who we are has shaped the cultural conversation and helped define what it means to be courageous with our lives. Atlas of the Heart draws on this research, as well as on Brown\'s singular skills as a storyteller, to show us how accurately naming an experience doesn\'t give the experience more power, it gives us the power of understanding, meaning, and choice.'
  },
  
  'The Science of Storytelling': {
    title: 'The Science of Storytelling',
    description: 'Stories mould who we are, from our character to our cultural identity. They drive us to act out our dreams and ambitions, and shape our politics and beliefs. We use them to construct our relationships, to keep order in our law courts, to interpret events in our newspapers and social media. Storytelling is an essential part of what makes us human.\n\nThere have been many attempts to understand what makes a good story – from Joseph Campbell\'s well-worn theories about myth and archetype to recent attempts to crack the \'Bestseller Code\'. But few have used a scientific approach. This is curious, for if we are to truly understand storytelling in its grandest sense, we must first come to understand the ultimate storyteller – the human brain.\n\nIn this scalpel-sharp, thought-provoking book, Will Storr demonstrates how master storytellers manipulate and compel us, leading us on a journey from the Hebrew scriptures to Mr Men, from Booker Prize-winning literature to box set TV.'
  },
  
  'Arguing with Zombies': {
    title: 'Arguing with Zombies: Economics, Politics, and the Fight for a Better Future',
    description: 'There is no better guide than Paul Krugman to basic economics, the ideas that animate much of our public policy. Likewise, there is no stronger foe of zombie economics, the misunderstandings that just won\'t die.\n\nIn Arguing with Zombies, Krugman tackles many of these misunderstandings, taking stock of where the United States has come from and where it\'s headed in a series of concise, digestible chapters. Drawn mainly from his popular New York Times column, they cover a wide range of issues, organized thematically and framed in the context of a wider debate. Explaining the complexities of health care, housing bubbles, tax reform, Social Security, and so much more with unrivaled clarity and precision, Arguing with Zombies is Krugman at the height of his powers.'
  },
  
  'Principles for Dealing with the Changing World Order': {
    title: 'Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail',
    description: 'From legendary investor Ray Dalio, author of the #1 New York Times bestseller Principles, who has spent half a century studying global economies and markets, Principles for Dealing with the Changing World Order examines history\'s most turbulent economic and political periods to reveal why the times ahead will likely be radically different from those we\'ve experienced in our lifetimes—and to offer practical advice on how to navigate them well.\n\nA few years ago, Ray Dalio noticed a confluence of political and economic conditions he hadn\'t encountered before. They included huge debts and zero or near-zero interest rates that led to massive printing of money in the world\'s three major reserve currencies; big political and social conflicts within countries, especially the US, due to the largest wealth, political, and values disparities in more than 100 years; and the rising of a world power (China) to challenge the existing world power (US) and the existing world order.'
  },
  
  'Tao Te Ching': {
    title: 'Tao Te Ching',
    description: 'Written more than two thousand years ago, the Tao Teh Ching, or -The Classic of the Way and Its Virtue, - is one of the true classics of the world of spiritual literature.\n\nTraditionally attributed to the legendary -Old Master, - Lao Tzu, the Tao Teh Ching teaches that the qualities of the enlightened sage or ideal ruler are identical with those of the perfected individual.\n\nToday, Lao Tzu\'s words are as useful in mastering the arts of leadership in business and politics as they are in developing a sense of balance and harmony in everyday life. To follow the Tao or Way of all things and realize their true nature is to embody humility, spontaneity, and generosity.'
  },
  
  'The Pumpkin Plan': {
    title: 'The Pumpkin Plan: A Simple Strategy to Grow a Remarkable Business in Any Field',
    description: 'Each year Americans start one million new businesses, nearly 80 percent of which fail within the first five years. Under such pressure to stay alive—let alone grow—it\'s easy for entrepreneurs to get caught up in a never-ending cycle of "sell it—do it, sell it—do it" that leaves them exhausted, frustrated, and unable to get ahead no matter how hard they try.\n\nThis is the exact situation Mike Michalowicz found himself in when he was trying to grow his first company. Although it was making steady money, there was never very much left over and he was chasing customers left and right, putting in twenty-eight-hour days, eight days a week. The punishing grind never let up. His company was alive but stunted, and he was barely breathing. That\'s when he discovered an unlikely source of inspiration—pumpkin farmers.'
  },
  
  'The Sky Blues': {
    title: 'The Sky Blues',
    description: 'Sky\'s small town turns absolutely claustrophobic when his secret promposal plans get leaked to the entire school in this witty, "earnest, heartfelt" (Becky Albertalli, New York Times bestselling author), and ultimately hopeful debut novel for fans of What if it\'s Us? and To All the Boys I\'ve Loved Before.\n\nSky Baker may be openly gay, but in his small, insular town, making sure he was invisible has always been easier than being himself. Determined not to let anything ruin his senior year, Sky decides to make a splash at his high school\'s annual beach bum party by asking his crush, Ali, to prom—and he has thirty days to do it.\n\nWhat better way to start living loud and proud than by pulling off the gayest promposal Rock Ledge, Michigan, has ever seen?'
  },
  
  'I Know Why the Caged Bird Sings': {
    title: 'I Know Why the Caged Bird Sings',
    description: 'Maya Angelou\'s debut memoir is a modern American classic beloved worldwide. Her life story is told in the documentary film And Still I Rise, as seen on PBS\'s American Masters.\n\nHere is a book as joyous and painful, as mysterious and memorable, as childhood itself. I Know Why the Caged Bird Sings captures the longing of lonely children, the brute insult of bigotry, and the wonder of words that can make the world right. Maya Angelou\'s debut memoir is a modern American classic beloved worldwide.\n\nSent by their mother to live with their devout, self-sufficient grandmother in a small Southern town, Maya and her brother, Bailey, endure the ache of abandonment and the prejudice of the local "powhitetrash." At eight years old and back at her mother\'s side in St. Louis, Maya is attacked by a man many times her age—and has to live with the consequences for a lifetime.'
  }
};

// Get all book titles for random selection
export const getAllBookTitles = (): string[] => {
  return Object.keys(books);
}; 