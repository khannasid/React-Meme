import React from "react";
import '../css/Form.css'

export default function Form(){

const filepath = "image.png";
const [meme, setMeme] = React.useState({
    image: ""
})
const [newMeme, setNewMeme] = React.useState(0);

function memeRequest(){
    console.log(newMeme+ " new MEME value");
    setNewMeme(pre =>{
        return pre+1;
    })
}

React.useEffect(()=>{
    async function fetchData(){
        const url = 'https://meme-api.com/gimme';
        
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result);
            setMeme((pre) =>({
                ...pre,
               image: result.preview[3]
            }));
        } catch (error) {
            console.error(error);
        }
    }
    fetchData();
}, [newMeme]);

    const downloadImage = async ()=>{
        const imageBlob = await fetch(meme.image,{
            method : "GET",
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
            }
        })
            .then((response) => response.arrayBuffer())
            .then((buffer) => new Blob([buffer],{type: "image/jpeg"}));

        const link = document.createElement('a');
        link.href = URL.createObjectURL(imageBlob);
        link.download = filepath;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return(
        <div className="form">
            <button onClick={downloadImage} className="download">
                Download Image!
            </button>
            <button onClick={memeRequest} className="random">
                Random Meme!!
            </button>
            <div className="meme">
                <img src={meme.image} className="meme--image" />
            </div>
        </div>
    )
}