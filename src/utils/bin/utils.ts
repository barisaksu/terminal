import packageJson from '../../../package.json';
import * as bin from './index';

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');

  return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

/*export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};*/

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const blog = async (args: string[]): Promise<string> => {
  window.open('https://dev.to/baris', '_self');

  return 'Opening blog...';
};

export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:baris@barisaksu.com');

  return 'Opening mailto:baris@barisaksu.com...';
};

/* export const vi = async (args: string[]): Promise<string> => {
  return `why use vi? try 'emacs'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `why use vim? try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `really? emacs? you should be using 'vim'`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);

  return `Permission denied: unable to run the command '${args[0]}' as root.`;
}; */

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open('https://github.com/barisaksu/terminal', '_blank');
  }, 1000);

  return 'Opening repository...';
};

// export const donate = async (args?: string[]): Promise<string> => {
//   window.open(packageJson.funding.url, '_blank');

//   return 'Opening donation url...';
// };


export const welcome = (args?: string[]): string => {
  return `

   /\\_/\\
  ( o.o )
   > ^ <    v${packageJson.version}
   
Hi 👋, I'm Barış
A passionate fullstack developer from Turkey

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.
--
`;
};
