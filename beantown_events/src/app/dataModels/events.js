export default class Event{ //hanbdle slideSHow
    constructor(type, title, description, lcoation = "", price="", image = null, extras = Object(), slideShowImages = []){
        this.title = title; 
        this.description = description; //eye catcher descirption 
        this.lcoation = lcoation
        this.price = price; 
        this.image = "https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww"; 
        this.extras = extras; //an object dType; will be displayed in a table 
        this.slideShowImages = slideShowImages
    }

    renderTable(){
        return( 
            <table>
                <thead>
                    <tr>
                    {
                        Object.keys(this.extras).map(key => <th key = {key}><h4>{key}: </h4></th>)
                    }
                    </tr>
                </thead>

                <tbody>
                    <tr>
                         {
                        Object.keys(this.extras).map(key => <td key = {key}>{this.extras[key]}</td>)
                    }
                    </tr>
                </tbody>
                </table>
        )
    }

    render(){
        return( 
            <div >
                {this.image ? <img style = {{ 
                    height: 100, 
                    width: "auto", 
                    
                }} src = {this.image}/> : null}
                <h2 style = {{textDecoration:"underline"}}>{this.title}</h2>
                <h3>{this.description}</h3>
                {
                    this.extras? this.renderTable() : null
                }

                {
                    /*render image slideSHow if image slide show array is not empty*/ 

                }
            </div>
        )
    }
}




//Concerts EVent - Jackson 
//const concertEvent = new Event() 


//Musseums - Quinn 
//const museumsEvent = new Event() 


//Clubs EVent - Yana 
//const clubsEvent = new Event() 


//250th Anniversary Celebrations - Sara 
//const anivasoryEvent = new Event() 





