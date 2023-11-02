import smartpy as sp

class Voting(sp.Contract):
    def __init__(self):
        self.init(
            candidates = sp.map(l={0 : 0, 1 : 0, 2 : 0, 3 : 0},tkey=sp.TNat,tvalue=sp.TNat),
            voters = sp.map(l={},tkey=sp.TAddress,tvalue=sp.TNat),
            totalVotes=sp.nat(0)
        )
    @sp.entry_point
    def submit_vote(self,ckey):
        #check is voter has already voted or not
        sp.verify(self.data.voters.contains(sp.sender) == False, "User Alreay voted" )
        #increasing vote count
        self.data.candidates[ckey] += 1 
        #adding voter to the map
        self.data.voters[sp.sender] = sp.nat(0)
        #increased vote count
        self.data.totalVotes += 1
        
    @sp.entry_point
    def reset_votes(self):
        self.data.totalVotes = sp.nat(0)
        self.data.voters = {}
        self.data.candidates = {0 : 0, 1 : 0, 2 : 0, 3 : 0}



    


    
        
        
        
        
         
        
        