

var arrayOfQuotes = [{'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
   },
   {'author':'Oscar Wilde',
    'quote':'Be yourself; everyone else is already taken'
   },
   {'author':'Frank Zappa',
    'quote':'So many books, so little tim'
   },
   {'author':'Albert Einstein',
    'quote':"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"
   },
   {'author':' Dr. Seuss',
    'quote':"You know you're in love when you can't fall asleep because reality is finally better than your dreams"
   },
   {'author':' Mahatma Gandhi',
    'quote':'Be the change that you wish to see in the world'
   },
   {'author':' Albert Camus',
    'quote':"'Don't walk in front of me… I may not follow, Don't walk behind me… I may not lead,Walk beside me… just be my friend"
   },
   {'author':'Mark Twain',
    'quote':"'If you tell the truth, you don't have to remember anything'"
   },
   {'author':'Elbert Hubbard',
    'quote':'A friend is someone who knows all about you and still loves you'
   },
   {'author':'Oscar Wilde',
    'quote':'Always forgive your enemies; nothing annoys them so much'
   },

];
	
function generateQuote(){
    var randomNumber = Math.floor(Math.random() * (arrayOfQuotes.length));
    document.getElementById("quoteOutput").innerHTML = arrayOfQuotes[randomNumber].quote;
    document.getElementById("authorOutput").innerHTML = arrayOfQuotes[randomNumber].author;
   


}