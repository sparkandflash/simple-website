import {  faGithub, faDiscord, faBluesky  } from '@fortawesome/free-brands-svg-icons';
let galleryData = {
   'imagebaseurl': 'https://sparkandflash.github.io/',
   'name': 'LSZ',
   'role': 'developer/artist/writer',
   'about': 'Hello, This is LSZ, I\'m 25 years old, I like to paint and code!',
   'socialLinks': [
      {
         'name': 'bluesky',
         'url': 'https://bsky.app/profile/lsz.varnexo.in',
         'className': faBluesky
      },
      {
         'name': 'github',
         'url': 'https://github.com/sparkandflash',
         'className': faGithub
      },
      {
         'name': 'discord',
         'url': 'https://discord.gg/QDYqpGZnhC',
         'className': faDiscord,
      }
   ],
   'artworks': [
  { 'url': './artworks/2.jpeg' }, { 'url': './artworks/3.jpeg' },  { 'url': './artworks/22.jpeg' }, 
      { 'url': './artworks/4.jpeg' }, { 'url': './artworks/5.jpeg' }, { 'url': './artworks/6.jpeg' },
      { 'url': './artworks/7.jpeg' }, { 'url': './artworks/8.jpeg' }, { 'url': './artworks/9.jpeg' },
      { 'url': './artworks/10.jpeg' }, { 'url': './artworks/11.jpeg' }, { 'url': './artworks/12.jpeg' },
   { 'url': './artworks/14.jpeg' },   { 'url': './artworks/20.jpeg' }, { 'url': './artworks/21.jpeg' },
      { 'url': './artworks/16.jpeg' }, { 'url': './artworks/17.jpeg' }, { 'url': './artworks/18.jpeg' },
  
   
   ],
   'projects': [
      {
         'name': 'Ewaste Nft marketplace',
         'description': 'An E-waste marketplace, based on NFTs and IPFS storage system,constructed with nextJS, reactJS, chakra UI, solidity contract, etherJS, on Rinkeby and Goerli test networks. I built most of the backend components consulting web3, ethers js documentations and using another marketplace as a reference. Front end components are all built from scratch using chakra UI and css. It is hosted on vercel, with a domain assigned to it. The project is live on goerli testnet and metamask wallet can be used to interact with it.',
         'links': 'https://github.com/sparkandflash/template-nft-marketplace'
      },
      {
         'name': 'NFT Airdrop',
         'description': 'NFT airdrop site made using nextJS and openseaJS. Works on polygon and etherurm contracts',
         'links': 'https://github.com/sparkandflash/next-js-airdrop-site'
      },
      {
         'name': 'Discord chat bot using BrainShop API.',
         'description': 'It was a fun project made purely for entertainment purposes, A Discord bot made with discordJS version 11-12 and BrainShop chatbot API that generated replies to discord user messages. it also includes standard discord bot commands.',
         'links': 'https://github.com/sparkandflash/discord-chat-bot'
      },
      {
         'name': 'World building Wiki project',
         'description': 'A simple wiki management system, A CRUD web app based on mongodb, react, springboot- work in progress',
         'links': 'https://www.varnexo.in'
      }]
}
export default galleryData
