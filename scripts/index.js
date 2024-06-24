class Advice 
{
    constructor()
    {
        this.init();
    }

    init()
    {
        this.APIFetcher();
        this.refreshRequest();
    }

    APIFetcher()
    {
        const apiURL = 'https://api.adviceslip.com/advice' // returns random advice 
        let adviceObject = {}; // init object outside of fetch scope

        fetch(apiURL)
        .then(response => response.json())
        .then(data => 
        {
            adviceObject = 
            {
                id: data.slip.id,
                advice: data.slip.advice
            };            
            this.updateAdvice(adviceObject); // need this to carry over methods into updateAdvice function}
        })
        .catch(error => console.log(error))
    }

    updateAdvice(adviceObject) 
    {
        document.querySelector('#advice-number-container').textContent = adviceObject.id;
        document.querySelector('#advice-text').textContent = adviceObject.advice; 
    }

    refreshRequest()
    {
        const diceIcon = document.querySelector('.icon-dice-container');
        diceIcon.onclick = () => 
        {
            this.APIFetcher();  
        }
    }

}
const advice = new Advice();