import { readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
const html=await readFile('dist/index.html','utf8');
const links=[...html.matchAll(/(?:href|src)="([^"#][^"]*)"/g)].map(m=>m[1]);
for(const link of links){
  if(/^(https?:|mailto:)/.test(link))continue;
  const file=resolve('dist',link.split('#')[0]);
  if(!(await stat(file)).isFile())throw new Error(`Missing asset: ${link}`);
}
const pdf=await readFile('dist/assets/Nino_Lisjak_CV.pdf');
if(!pdf.subarray(0,5).equals(Buffer.from('%PDF-')))throw new Error('CV is not a PDF');
const script=await readFile('dist/app.js','utf8');
const requiredRepos=['eClanarina','GameOn-','AFTRHOURS','osiris_landingpage','tempo','smartchef-parser','Planify','gameon_projekt','butterflawpage','rebuttal','latenightkebab'];
for(const repo of requiredRepos)if(!script.includes(`repo:'${repo}'`))throw new Error(`Project omitted: ${repo}`);
if(/href=["']#["']/.test(html))throw new Error('Placeholder link detected');
console.log(`All local assets, CV, ${requiredRepos.length} project entries, and link targets validated.`);
