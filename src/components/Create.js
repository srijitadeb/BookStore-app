import React from 'react';

export class Create extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        )
    }
};

export default Create;