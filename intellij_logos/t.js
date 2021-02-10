const commits = require('./commits')
const sa = require('superagent')

function execShellCommand(cmd) {
 const exec = require('child_process').exec;
 return new Promise((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
   if (error) {
    console.warn(error);
   }
   resolve(stdout? stdout : stderr);
  });
 });
}

function pad(n) {
  let ns = n + ''
  if (ns.length === 1) {
    return '0' + ns
  } else {
    return ns
  }
}

async function main() {
  for (let c of commits) {
    const url = `https://raw.githubusercontent.com/JetBrains/intellij-community/${c.sha}/community-resources/src/idea_community_logo.png`
    console.log(url)
    const date = new Date(c.commit.author.date)
    const name = `${date.getFullYear()}.${pad(date.getMonth())}.${pad(date.getDay())}.png`
    let command = `curl ${url} --output logos/${name}`
    // console.log(command)
    execShellCommand(command)
  }
}

main()


