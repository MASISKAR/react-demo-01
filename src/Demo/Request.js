import React from 'react';

class Request extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(result => result.json())
            .then(data => {
                console.log('data', data);

                this.setState({ data: data.splice(0, 20) });
            })
            .catch(error => {
                console.log('error', error);
            });
    }

    render() {
        /*         let num = 10;
        
                function p(){
                    return new Promise((resolve, reject)=>{
                        if(num%2 ===0){
                            resolve(true);
                        }
                        else {
                            reject(false);
                        }
                        
                        });
                }
        
                function p1(){
                    return new Promise((resolve, reject)=>{
                        if(num%2 ===1){
                            resolve(true);
                        }
                        else {
                            reject(false);
                        }
                        
                        });
                }
        
                p().then((result)=>{
                    console.log('result', result);
                   return p1();
                })
                .then((res1)=>{
                    console.log('res1', res1);
                })
                .catch((err)=>{
                    console.log('err', err);
                }) */


        return (
            <div>
                {this.state.data.map((obj, index) => {
                    return (
                        <div key={index}>
                            <p>Title: {obj.title}</p>
                            <p>id: {obj.id}</p>
                            <p>Completed: {obj.completed}</p>
                        </div>
                    );
                })}
            </div>

        );
    }
}

export default Request;