import { VideoGame } from './game';
import { Twitcher} from './twitcher';

const twitcher = new Twitcher('JeandDus', 'ici');
twitcher.games = [
    { 
        date: new Date(), 
        title: 'super partie', 
        videoGame: new VideoGame('Final fantasy 8'),
        status: 'Failed'
    },
    { 
        date: new Date(), 
        title: 'super partie', 
        videoGame: { id: 1, label: 'Final fantasy 7 !! the best !!!!' },
        status: 'Failed'
    } // objet literal // objet literal
]