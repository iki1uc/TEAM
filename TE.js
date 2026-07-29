export function TEAM_BUILD(hub, nc, pq, tmp, net, respo){
    return {
        team: {
            NC: nc,
            PQ: pq,
            TMP: tmp,
            NET: net,
            RESPO: respo,
            HUB: hub,
            ID: "ID-Node",
            AID: "AID-Node"
        },
        status: "active",
        station: "HUB-ALL-AI-Core"
    };
}
