const ROUTES = {
  home: () => '/home',
  topics: () => '/topics'
};

ROUTES.topics.travel = () => ROUTES.topics() + '/travel';
ROUTES.topics.travel.spain = () => ROUTES.topics.travel() + '/spain';
ROUTES.topics.travel.england= () => ROUTES.topics.travel() + '/england';

ROUTES.topics.cooking = () => ROUTES.topics() + '/cooking';
ROUTES.topics.cooking.lembas = () => ROUTES.topics.cooking() + '/lembas';

const routeToCooking = ROUTES.topics.cooking();        // /topics/cooking
const routeToLembas =  ROUTES.topics.cooking.lembas(); // /topics/cooking/lembasm
