import express from "express";
import bodyParser from "body-parser";
import dotenv  from "dotenv"
import fetch from 'node-fetch';
dotenv.config()

const app = express();
const port = 8080;
const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoCategoryId=${17}&key=${process.env.API_KEY}`

app.use(bodyParser.json());

//for getting random cat videos
app.get('/api/cats',(req,res) => {
  const id = 17
  const options = {
    method: 'GET',
    headers: {
      'youtube-Host': 'www.youtube.com',
      'youtube-Key': process.env.API_KEY
    }
  };
	fetch(url, options)
		.then(res => res.json())
		.then(json => res.send(json))
		.catch(err => console.error('error:' + err));
})

//for getting specific videos => TBD

app.get('/api/:id',(req,res) => {
  const query = req.params.id
  const queryUrl = `https://www.googleapis.com/youtube/v3/search?key=${process.env.API_KEY_2}&type=video&part=snippet&q=${query}`;

  const options = {
    method: 'GET',
    headers: {
      'youtube-Host': 'www.youtube.com',
      'youtube-Key': process.env.API_KEY
    }
  };
	fetch(queryUrl, options)
	.then(res => res.json())
	.then(json => {
    const newData = json.items.map(video => {
      const dataObj = {
        name:video.snippet.title,
        description:video.snippet.description,
        id:video.id.videoId,
      }
      return dataObj
    })
    res.json(newData)
  })
	.catch(err => console.error('error:' + err));
})

app.listen(port,() => {
     console.log(`app is listening to port ${port}`);
})