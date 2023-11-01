// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation
import {tezos} from "./tezos"

export const submitVoteOperation = async (candidateIndex: Number) => {
    try{
        const contract = await tezos.wallet.at("KT1QToYW2z8idboAMnDy1AuPHq2EQMdNurJz");
        const op = await contract.methods.submit_vote(candidateIndex).send()
        await op.confirmation(1);

    }
    catch(err){
        throw err;
    }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

export const resetVotesOperation = async () => {
    try{
        const contract = await tezos.wallet.at("KT1QToYW2z8idboAMnDy1AuPHq2EQMdNurJz")
        const op = await contract.methods.reset_votes().send()
        await op.confirmation(1)
    }
    catch (err){
        throw err;
    }
};
