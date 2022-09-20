import "../css/style.css";

// det går å importer en hel side, men IKKE gjør det "import * actions from "./actions.mjs".

//her endres showmessage til show text. nytt navn med andr ord
import { showmessage as showText, ShowAge } from "./actions.mjs";

import { shootTheBall } from "./team.mjs";

//Import default
import passTheBall from "./team.mjs";

//Her bruker vi funkjsonen
showText("YOU!");
ShowAge(30);
passTheBall();
shootTheBall();
