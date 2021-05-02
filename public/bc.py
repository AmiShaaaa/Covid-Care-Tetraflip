import hashlib

class Block:
    def __init__(self, previous, transaction):
        self.transactions = transaction
        self.previous = previous
        string_to_hash = "".join(transaction) + previous
        self.block_hash = hashlib.sha256(string_to_hash.encode()).hexdigest()


first_block = Block("0", ["0"])

run = 1

prev_block = first_block

vote = int(input())

str1 = str(vote)

new_block = Block(prev_block.block_hash, [str1])

print(prev_block.block_hash)

print(new_block.transactions)

print(new_block.block_hash)

prev_block = new_block

while run > 0:

    vote = int(input())

    str1 = str(vote)

    new_block = Block(prev_block.block_hash, [str1])

    print(prev_block.block_hash)

    print(new_block.transactions)

    print(new_block.block_hash)

    prev_block = new_block



