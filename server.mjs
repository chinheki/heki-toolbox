import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('./dist/',import.meta.url);
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8'};
http.createServer(async(req,res)=>{try{const path=new URL(req.url,'http://localhost').pathname;const name=path==='/'?'index.html':path.slice(1);if(!['index.html','app.js','style.css'].includes(name)){res.writeHead(404);return res.end('Not found');}const data=await readFile(fileURLToPath(new URL(name,root)));res.writeHead(200,{'Content-Type':types[name.slice(name.lastIndexOf('.'))],'Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(500);res.end('Unable to read file');}}).listen(19093,()=>console.log('Heki Toolbox: http://127.0.0.1:19093'));
