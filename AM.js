<script type="module">
import { HUB_AI } from "../HUB/HUB_AI.js";
import { NC_QUANTUM } from "../NC/NC_Quantum.js";
import { PQ_HYPER } from "../PQ/PQ_Hyper.js";
import { TMP_GHOST } from "../TMP/TMP_Ghost.js";
import { NET_OVERDRIVE } from "../NET/NET_Overdrive.js";
import { TEAM_BUILD } from "./TEAM_BUILD.js";

const nc = NC_QUANTUM();
const pq = PQ_HYPER(nc);
const tmp = TMP_GHOST(pq);
const hub = HUB_AI(nc, pq, tmp);
const net = NET_OVERDRIVE(nc, pq, tmp, hub);
const respo = { mode: "active", signal: "bright" };

const team = TEAM_BUILD(hub, nc, pq, tmp, net, respo);

document.getElementById("team").textContent =
    JSON.stringify(team, null, 2);
</script>

<pre id="team"></pre>
