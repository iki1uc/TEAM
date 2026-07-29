export function TEAM_NC_QUANTUM_NODES(team){
    return {
        nodes: {
            spin: team.team.NC.spin,
            energy: team.team.NC.energy,
            matrix: team.team.NC.matrix
        }
    };
}
