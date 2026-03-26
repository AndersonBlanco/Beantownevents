export default class Event{
    constructor(type, title, description, extras = Object()){
        this.title = title; 
        this.description = description; 
        this.extras = extras; //an object dType; will be displayed in a table 
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
                <h2 style = {{textDecoration:"underline"}}>{this.title}</h2>
                <h3>{this.description}</h3>
                {
                    this.extras? this.renderTable() : null
                }
            </div>
        )
    }
}