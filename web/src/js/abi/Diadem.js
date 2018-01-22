export default {
  "contractName": "Diadem",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "mintAgents",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        },
        {
          "name": "_state",
          "type": "bool"
        }
      ],
      "name": "setMintAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "addr",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "state",
          "type": "bool"
        }
      ],
      "name": "MintingAgentChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600360146101000a81548160ff02191690831515021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061189e8061006f6000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102dc57806342c1867b14610336578063432146751461038757806366188463146103cb57806370a08231146104255780638da5cb5b1461047257806395d89b41146104c7578063a9059cbb14610555578063d73dd623146105af578063dd62ed3e14610609578063f2fde38b14610675575b600080fd5b341561010157600080fd5b6101096106ae565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b6101366106c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106fa565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e6107ec565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506107f2565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610bb1565b604051808260ff1660ff16815260200191505060405180910390f35b34156102e757600080fd5b61031c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bb6565b604051808215151515815260200191505060405180910390f35b341561034157600080fd5b61036d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610da1565b604051808215151515815260200191505060405180910390f35b341561039257600080fd5b6103c9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610dc1565b005b34156103d657600080fd5b61040b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f03565b604051808215151515815260200191505060405180910390f35b341561043057600080fd5b61045c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611194565b6040518082815260200191505060405180910390f35b341561047d57600080fd5b6104856111dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104d257600080fd5b6104da611203565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051a5780820151818401526020810190506104ff565b50505050905090810190601f1680156105475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561056057600080fd5b610595600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123c565b604051808215151515815260200191505060405180910390f35b34156105ba57600080fd5b6105ef600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611460565b604051808215151515815260200191505060405180910390f35b341561061457600080fd5b61065f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061165c565b6040518082815260200191505060405180910390f35b341561068057600080fd5b6106ac600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116e3565b005b600360149054906101000a900460ff1681565b6040805190810160405280600681526020017f44696164656d000000000000000000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561082f57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561087d57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561090857600080fd5b61095a82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109ef82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac182600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b601281565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610c1757600080fd5b600360149054906101000a900460ff16151515610c3357600080fd5b610c488260005461185490919063ffffffff16565b600081905550610ca082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1d57600080fd5b600360149054906101000a900460ff16151515610e3957600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4b0adf6c802794c7dde28a08a4e07131abcff3bf9603cd71f14f90bec7865efa8282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a15050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611014576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110a8565b611027838261183b90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600381526020017f44444d000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127957600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c757600080fd5b61131982600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113ae82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114f182600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561177b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561184957fe5b818303905092915050565b600080828401905083811015151561186857fe5b80915050929150505600a165627a7a723058204b10d771205974d6b99632d6206a0f4bcc0e467e67db6e10b2586958dbb4ee8f0029",
  "deployedBytecode": "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610123578063095ea7b3146101b157806318160ddd1461020b57806323b872dd14610234578063313ce567146102ad57806340c10f19146102dc57806342c1867b14610336578063432146751461038757806366188463146103cb57806370a08231146104255780638da5cb5b1461047257806395d89b41146104c7578063a9059cbb14610555578063d73dd623146105af578063dd62ed3e14610609578063f2fde38b14610675575b600080fd5b341561010157600080fd5b6101096106ae565b604051808215151515815260200191505060405180910390f35b341561012e57600080fd5b6101366106c1565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017657808201518184015260208101905061015b565b50505050905090810190601f1680156101a35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101bc57600080fd5b6101f1600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106fa565b604051808215151515815260200191505060405180910390f35b341561021657600080fd5b61021e6107ec565b6040518082815260200191505060405180910390f35b341561023f57600080fd5b610293600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506107f2565b604051808215151515815260200191505060405180910390f35b34156102b857600080fd5b6102c0610bb1565b604051808260ff1660ff16815260200191505060405180910390f35b34156102e757600080fd5b61031c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bb6565b604051808215151515815260200191505060405180910390f35b341561034157600080fd5b61036d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610da1565b604051808215151515815260200191505060405180910390f35b341561039257600080fd5b6103c9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050610dc1565b005b34156103d657600080fd5b61040b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f03565b604051808215151515815260200191505060405180910390f35b341561043057600080fd5b61045c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611194565b6040518082815260200191505060405180910390f35b341561047d57600080fd5b6104856111dd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104d257600080fd5b6104da611203565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561051a5780820151818401526020810190506104ff565b50505050905090810190601f1680156105475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561056057600080fd5b610595600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061123c565b604051808215151515815260200191505060405180910390f35b34156105ba57600080fd5b6105ef600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611460565b604051808215151515815260200191505060405180910390f35b341561061457600080fd5b61065f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061165c565b6040518082815260200191505060405180910390f35b341561068057600080fd5b6106ac600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506116e3565b005b600360149054906101000a900460ff1681565b6040805190810160405280600681526020017f44696164656d000000000000000000000000000000000000000000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60005481565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561082f57600080fd5b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561087d57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561090857600080fd5b61095a82600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109ef82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ac182600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b601281565b600060011515600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515141515610c1757600080fd5b600360149054906101000a900460ff16151515610c3357600080fd5b610c488260005461185490919063ffffffff16565b600081905550610ca082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60046020528060005260406000206000915054906101000a900460ff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1d57600080fd5b600360149054906101000a900460ff16151515610e3957600080fd5b80600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f4b0adf6c802794c7dde28a08a4e07131abcff3bf9603cd71f14f90bec7865efa8282604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001821515151581526020019250505060405180910390a15050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115611014576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506110a8565b611027838261183b90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6040805190810160405280600381526020017f44444d000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561127957600080fd5b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156112c757600080fd5b61131982600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461183b90919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506113ae82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b60006114f182600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461185490919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173f57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561177b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600082821115151561184957fe5b818303905092915050565b600080828401905083811015151561186857fe5b80915050929150505600a165627a7a723058204b10d771205974d6b99632d6206a0f4bcc0e467e67db6e10b2586958dbb4ee8f0029",
  "sourceMap": "149:1073:0:-;;;356:5;326:35;;;;;;;;;;;;;;;;;;;;509:10:4;501:5;;:18;;;;;;;;;;;;;;;;;;149:1073:0;;;;;;",
  "deployedSourceMap": "149:1073:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;326:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;197:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1799:183:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;179:26:7;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;737:439:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;284:35:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;418:301;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;368:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;725:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2928:398:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1018:107:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;241:37:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;437:379:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2667:257:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2301:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;834:169:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;326:35:0;;;;;;;;;;;;;:::o;197:38::-;;;;;;;;;;;;;;;;;;;;:::o;1799:183:8:-;1866:4;1910:6;1878:7;:19;1886:10;1878:19;;;;;;;;;;;;;;;:29;1898:8;1878:29;;;;;;;;;;;;;;;:38;;;;1943:8;1922:38;;1931:10;1922:38;;;1953:6;1922:38;;;;;;;;;;;;;;;;;;1973:4;1966:11;;1799:183;;;;:::o;179:26:7:-;;;;:::o;737:439:8:-;819:4;854:1;839:17;;:3;:17;;;;831:26;;;;;;;;881:8;:15;890:5;881:15;;;;;;;;;;;;;;;;871:6;:25;;863:34;;;;;;;;921:7;:14;929:5;921:14;;;;;;;;;;;;;;;:26;936:10;921:26;;;;;;;;;;;;;;;;911:6;:36;;903:45;;;;;;;;973:27;993:6;973:8;:15;982:5;973:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;955:8;:15;964:5;955:15;;;;;;;;;;;;;;;:45;;;;1022:25;1040:6;1022:8;:13;1031:3;1022:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1006:8;:13;1015:3;1006:13;;;;;;;;;;;;;;;:41;;;;1082:38;1113:6;1082:7;:14;1090:5;1082:14;;;;;;;;;;;;;;;:26;1097:10;1082:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1053:7;:14;1061:5;1053:14;;;;;;;;;;;;;;;:26;1068:10;1053:26;;;;;;;;;;;;;;;:67;;;;1142:3;1126:28;;1135:5;1126:28;;;1147:6;1126:28;;;;;;;;;;;;;;;;;;1167:4;1160:11;;737:439;;;;;:::o;284:35:0:-;317:2;284:35;:::o;418:301::-;507:4;1061;1035:30;;:10;:22;1046:10;1035:22;;;;;;;;;;;;;;;;;;;;;;;;;:30;;;1027:39;;;;;;;;952:15;;;;;;;;;;;951:16;943:25;;;;;;;;541:24;557:7;541:11;;:15;;:24;;;;:::i;:::-;527:11;:38;;;;591:26;609:7;591:8;:13;600:3;591:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;575:8;:13;584:3;575:13;;;;;;;;;;;;;;;:42;;;;633:3;628:18;;;638:7;628:18;;;;;;;;;;;;;;;;;;677:3;656:34;;673:1;656:34;;;682:7;656:34;;;;;;;;;;;;;;;;;;708:4;701:11;;418:301;;;;:::o;368:43::-;;;;;;;;;;;;;;;;;;;;;;:::o;725:183::-;654:5:4;;;;;;;;;;;640:19;;:10;:19;;;632:28;;;;;;;;952:15:0;;;;;;;;;;;951:16;943:25;;;;;;;;848:6;825:10;:20;836:8;825:20;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;864:37;884:8;894:6;864:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;725:183;;:::o;2928:398:8:-;3011:4;3023:13;3039:7;:19;3047:10;3039:19;;;;;;;;;;;;;;;:29;3059:8;3039:29;;;;;;;;;;;;;;;;3023:45;;3097:8;3078:16;:27;3074:164;;;3147:1;3115:7;:19;3123:10;3115:19;;;;;;;;;;;;;;;:29;3135:8;3115:29;;;;;;;;;;;;;;;:33;;;;3074:164;;;3201:30;3214:16;3201:8;:12;;:30;;;;:::i;:::-;3169:7;:19;3177:10;3169:19;;;;;;;;;;;;;;;:29;3189:8;3169:29;;;;;;;;;;;;;;;:62;;;;3074:164;3264:8;3243:61;;3252:10;3243:61;;;3274:7;:19;3282:10;3274:19;;;;;;;;;;;;;;;:29;3294:8;3274:29;;;;;;;;;;;;;;;;3243:61;;;;;;;;;;;;;;;;;;3317:4;3310:11;;2928:398;;;;;:::o;1018:107:5:-;1074:15;1104:8;:16;1113:6;1104:16;;;;;;;;;;;;;;;;1097:23;;1018:107;;;:::o;238:20:4:-;;;;;;;;;;;;;:::o;241:37:0:-;;;;;;;;;;;;;;;;;;;;:::o;437:379:5:-;500:4;535:1;520:17;;:3;:17;;;;512:26;;;;;;;;562:8;:20;571:10;562:20;;;;;;;;;;;;;;;;552:6;:30;;544:39;;;;;;;;676:32;701:6;676:8;:20;685:10;676:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;653:8;:20;662:10;653:20;;;;;;;;;;;;;;;:55;;;;730:25;748:6;730:8;:13;739:3;730:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;714:8;:13;723:3;714:13;;;;;;;;;;;;;;;:41;;;;782:3;761:33;;770:10;761:33;;;787:6;761:33;;;;;;;;;;;;;;;;;;807:4;800:11;;437:379;;;;:::o;2667:257:8:-;2745:4;2789:46;2823:11;2789:7;:19;2797:10;2789:19;;;;;;;;;;;;;;;:29;2809:8;2789:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2757:7;:19;2765:10;2757:19;;;;;;;;;;;;;;;:29;2777:8;2757:29;;;;;;;;;;;;;;;:78;;;;2862:8;2841:61;;2850:10;2841:61;;;2872:7;:19;2880:10;2872:19;;;;;;;;;;;;;;;:29;2892:8;2872:29;;;;;;;;;;;;;;;;2841:61;;;;;;;;;;;;;;;;;;2915:4;2908:11;;2667:257;;;;:::o;2301:126::-;2375:7;2397;:15;2405:6;2397:15;;;;;;;;;;;;;;;:25;2413:8;2397:25;;;;;;;;;;;;;;;;2390:32;;2301:126;;;;:::o;834:169:4:-;654:5;;;;;;;;;;;640:19;;:10;:19;;;632:28;;;;;;;;930:1;910:22;;:8;:22;;;;902:31;;;;;;;;967:8;939:37;;960:5;;;;;;;;;;;939:37;;;;;;;;;;;;990:8;982:5;;:16;;;;;;;;;;;;;;;;;;834:169;:::o;584:110:3:-;642:7;669:1;664;:6;;657:14;;;;;;688:1;684;:5;677:12;;584:110;;;;:::o;698:129::-;756:7;771:9;787:1;783;:5;771:17;;806:1;801;:6;;794:14;;;;;;821:1;814:8;;698:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport 'zeppelin-solidity/contracts/token/StandardToken.sol';\nimport 'zeppelin-solidity/contracts/ownership/Ownable.sol';\n\ncontract Diadem is StandardToken, Ownable {\n    string public constant name = \"Diadem\";\n    string public constant symbol = \"DDM\";\n    uint8 public constant decimals = 18;\n\n    bool public mintingFinished = false;\n\n    mapping (address => bool) public mintAgents;\n\n    function mint(address _to, uint256 _amount)\n        public onlyMintAgent canMint returns(bool)\n    {\n        totalSupply = totalSupply.add(_amount);\n        balances[_to] = balances[_to].add(_amount);\n\n        Mint(_to, _amount);\n        Transfer(address(0), _to, _amount);\n\n        return true;\n    }\n\n    function setMintAgent(address _address, bool _state)\n        onlyOwner canMint public\n    {\n        mintAgents[_address] = _state;\n        MintingAgentChanged(_address, _state);\n    }\n\n    modifier canMint() {\n        require(!mintingFinished);\n        _;\n    }\n\n    modifier onlyMintAgent() {\n        require(mintAgents[msg.sender] == true);\n        _;\n    }\n\n    event Mint(address indexed to, uint256 amount);\n    event MintingAgentChanged(address addr, bool state);\n    event MintFinished();\n}",
  "sourcePath": "/src/contracts/Diadem.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/src/contracts/Diadem.sol",
      "exportedSymbols": {
        "Diadem": [
          130
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 1,
        "name": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "attributes": {
          "SourceUnit": 924,
          "absolutePath": "zeppelin-solidity/contracts/token/StandardToken.sol",
          "file": "zeppelin-solidity/contracts/token/StandardToken.sol",
          "scope": 131,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2,
        "name": "ImportDirective",
        "src": "26:61:0"
      },
      {
        "attributes": {
          "SourceUnit": 520,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 131,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3,
        "name": "ImportDirective",
        "src": "88:59:0"
      },
      {
        "attributes": {
          "contractDependencies": [
            519,
            605,
            648,
            677,
            923
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            130,
            519,
            923,
            605,
            648,
            677
          ],
          "name": "Diadem",
          "scope": 131
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "StandardToken",
                  "referencedDeclaration": 923,
                  "type": "contract StandardToken"
                },
                "id": 4,
                "name": "UserDefinedTypeName",
                "src": "168:13:0"
              }
            ],
            "id": 5,
            "name": "InheritanceSpecifier",
            "src": "168:13:0"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 519,
                  "type": "contract Ownable"
                },
                "id": 6,
                "name": "UserDefinedTypeName",
                "src": "183:7:0"
              }
            ],
            "id": 7,
            "name": "InheritanceSpecifier",
            "src": "183:7:0"
          },
          {
            "attributes": {
              "constant": true,
              "name": "name",
              "scope": 130,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 8,
                "name": "ElementaryTypeName",
                "src": "197:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "44696164656d",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"Diadem\"",
                  "value": "Diadem"
                },
                "id": 9,
                "name": "Literal",
                "src": "227:8:0"
              }
            ],
            "id": 10,
            "name": "VariableDeclaration",
            "src": "197:38:0"
          },
          {
            "attributes": {
              "constant": true,
              "name": "symbol",
              "scope": 130,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 11,
                "name": "ElementaryTypeName",
                "src": "241:6:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "44444d",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"DDM\"",
                  "value": "DDM"
                },
                "id": 12,
                "name": "Literal",
                "src": "273:5:0"
              }
            ],
            "id": 13,
            "name": "VariableDeclaration",
            "src": "241:37:0"
          },
          {
            "attributes": {
              "constant": true,
              "name": "decimals",
              "scope": 130,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 14,
                "name": "ElementaryTypeName",
                "src": "284:5:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "3138",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 18",
                  "value": "18"
                },
                "id": 15,
                "name": "Literal",
                "src": "317:2:0"
              }
            ],
            "id": 16,
            "name": "VariableDeclaration",
            "src": "284:35:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mintingFinished",
              "scope": 130,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bool",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bool",
                  "type": "bool"
                },
                "id": 17,
                "name": "ElementaryTypeName",
                "src": "326:4:0"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "66616c7365",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "bool",
                  "type": "bool",
                  "value": "false"
                },
                "id": 18,
                "name": "Literal",
                "src": "356:5:0"
              }
            ],
            "id": 19,
            "name": "VariableDeclaration",
            "src": "326:35:0"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mintAgents",
              "scope": 130,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => bool)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => bool)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 20,
                    "name": "ElementaryTypeName",
                    "src": "377:7:0"
                  },
                  {
                    "attributes": {
                      "name": "bool",
                      "type": "bool"
                    },
                    "id": 21,
                    "name": "ElementaryTypeName",
                    "src": "388:4:0"
                  }
                ],
                "id": 22,
                "name": "Mapping",
                "src": "368:25:0"
              }
            ],
            "id": 23,
            "name": "VariableDeclaration",
            "src": "368:43:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "mint",
              "payable": false,
              "scope": 130,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 24,
                        "name": "ElementaryTypeName",
                        "src": "432:7:0"
                      }
                    ],
                    "id": 25,
                    "name": "VariableDeclaration",
                    "src": "432:11:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amount",
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 26,
                        "name": "ElementaryTypeName",
                        "src": "445:7:0"
                      }
                    ],
                    "id": 27,
                    "name": "VariableDeclaration",
                    "src": "445:15:0"
                  }
                ],
                "id": 28,
                "name": "ParameterList",
                "src": "431:30:0"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 70,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 33,
                        "name": "ElementaryTypeName",
                        "src": "507:4:0"
                      }
                    ],
                    "id": 34,
                    "name": "VariableDeclaration",
                    "src": "507:4:0"
                  }
                ],
                "id": 35,
                "name": "ParameterList",
                "src": "506:6:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 115,
                      "type": "modifier ()",
                      "value": "onlyMintAgent"
                    },
                    "id": 29,
                    "name": "Identifier",
                    "src": "477:13:0"
                  }
                ],
                "id": 30,
                "name": "ModifierInvocation",
                "src": "477:13:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 102,
                      "type": "modifier ()",
                      "value": "canMint"
                    },
                    "id": 31,
                    "name": "Identifier",
                    "src": "491:7:0"
                  }
                ],
                "id": 32,
                "name": "ModifierInvocation",
                "src": "491:7:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 652,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 36,
                            "name": "Identifier",
                            "src": "527:11:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 462,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 652,
                                      "type": "uint256",
                                      "value": "totalSupply"
                                    },
                                    "id": 37,
                                    "name": "Identifier",
                                    "src": "541:11:0"
                                  }
                                ],
                                "id": 38,
                                "name": "MemberAccess",
                                "src": "541:15:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 27,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 39,
                                "name": "Identifier",
                                "src": "557:7:0"
                              }
                            ],
                            "id": 40,
                            "name": "FunctionCall",
                            "src": "541:24:0"
                          }
                        ],
                        "id": 41,
                        "name": "Assignment",
                        "src": "527:38:0"
                      }
                    ],
                    "id": 42,
                    "name": "ExpressionStatement",
                    "src": "527:38:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 532,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 43,
                                "name": "Identifier",
                                "src": "575:8:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 25,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 44,
                                "name": "Identifier",
                                "src": "584:3:0"
                              }
                            ],
                            "id": 45,
                            "name": "IndexAccess",
                            "src": "575:13:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "add",
                                  "referencedDeclaration": 462,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 532,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 46,
                                        "name": "Identifier",
                                        "src": "591:8:0"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 25,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 47,
                                        "name": "Identifier",
                                        "src": "600:3:0"
                                      }
                                    ],
                                    "id": 48,
                                    "name": "IndexAccess",
                                    "src": "591:13:0"
                                  }
                                ],
                                "id": 49,
                                "name": "MemberAccess",
                                "src": "591:17:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 27,
                                  "type": "uint256",
                                  "value": "_amount"
                                },
                                "id": 50,
                                "name": "Identifier",
                                "src": "609:7:0"
                              }
                            ],
                            "id": 51,
                            "name": "FunctionCall",
                            "src": "591:26:0"
                          }
                        ],
                        "id": 52,
                        "name": "Assignment",
                        "src": "575:42:0"
                      }
                    ],
                    "id": 53,
                    "name": "ExpressionStatement",
                    "src": "575:42:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 121,
                              "type": "function (address,uint256)",
                              "value": "Mint"
                            },
                            "id": 54,
                            "name": "Identifier",
                            "src": "628:4:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 25,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 55,
                            "name": "Identifier",
                            "src": "633:3:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 27,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 56,
                            "name": "Identifier",
                            "src": "638:7:0"
                          }
                        ],
                        "id": 57,
                        "name": "FunctionCall",
                        "src": "628:18:0"
                      }
                    ],
                    "id": 58,
                    "name": "ExpressionStatement",
                    "src": "628:18:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 676,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 59,
                            "name": "Identifier",
                            "src": "656:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 60,
                                "name": "ElementaryTypeNameExpression",
                                "src": "665:7:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 61,
                                "name": "Literal",
                                "src": "673:1:0"
                              }
                            ],
                            "id": 62,
                            "name": "FunctionCall",
                            "src": "665:10:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 25,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 63,
                            "name": "Identifier",
                            "src": "677:3:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 27,
                              "type": "uint256",
                              "value": "_amount"
                            },
                            "id": 64,
                            "name": "Identifier",
                            "src": "682:7:0"
                          }
                        ],
                        "id": 65,
                        "name": "FunctionCall",
                        "src": "656:34:0"
                      }
                    ],
                    "id": 66,
                    "name": "ExpressionStatement",
                    "src": "656:34:0"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 35
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 67,
                        "name": "Literal",
                        "src": "708:4:0"
                      }
                    ],
                    "id": 68,
                    "name": "Return",
                    "src": "701:11:0"
                  }
                ],
                "id": 69,
                "name": "Block",
                "src": "517:202:0"
              }
            ],
            "id": 70,
            "name": "FunctionDefinition",
            "src": "418:301:0"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setMintAgent",
              "payable": false,
              "scope": 130,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_address",
                      "scope": 93,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 71,
                        "name": "ElementaryTypeName",
                        "src": "747:7:0"
                      }
                    ],
                    "id": 72,
                    "name": "VariableDeclaration",
                    "src": "747:16:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_state",
                      "scope": 93,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 73,
                        "name": "ElementaryTypeName",
                        "src": "765:4:0"
                      }
                    ],
                    "id": 74,
                    "name": "VariableDeclaration",
                    "src": "765:11:0"
                  }
                ],
                "id": 75,
                "name": "ParameterList",
                "src": "746:31:0"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 80,
                "name": "ParameterList",
                "src": "815:0:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 493,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 76,
                    "name": "Identifier",
                    "src": "786:9:0"
                  }
                ],
                "id": 77,
                "name": "ModifierInvocation",
                "src": "786:9:0"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 102,
                      "type": "modifier ()",
                      "value": "canMint"
                    },
                    "id": 78,
                    "name": "Identifier",
                    "src": "796:7:0"
                  }
                ],
                "id": 79,
                "name": "ModifierInvocation",
                "src": "796:7:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 23,
                                  "type": "mapping(address => bool)",
                                  "value": "mintAgents"
                                },
                                "id": 81,
                                "name": "Identifier",
                                "src": "825:10:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 72,
                                  "type": "address",
                                  "value": "_address"
                                },
                                "id": 82,
                                "name": "Identifier",
                                "src": "836:8:0"
                              }
                            ],
                            "id": 83,
                            "name": "IndexAccess",
                            "src": "825:20:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 74,
                              "type": "bool",
                              "value": "_state"
                            },
                            "id": 84,
                            "name": "Identifier",
                            "src": "848:6:0"
                          }
                        ],
                        "id": 85,
                        "name": "Assignment",
                        "src": "825:29:0"
                      }
                    ],
                    "id": 86,
                    "name": "ExpressionStatement",
                    "src": "825:29:0"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 127,
                              "type": "function (address,bool)",
                              "value": "MintingAgentChanged"
                            },
                            "id": 87,
                            "name": "Identifier",
                            "src": "864:19:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 72,
                              "type": "address",
                              "value": "_address"
                            },
                            "id": 88,
                            "name": "Identifier",
                            "src": "884:8:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 74,
                              "type": "bool",
                              "value": "_state"
                            },
                            "id": 89,
                            "name": "Identifier",
                            "src": "894:6:0"
                          }
                        ],
                        "id": 90,
                        "name": "FunctionCall",
                        "src": "864:37:0"
                      }
                    ],
                    "id": 91,
                    "name": "ExpressionStatement",
                    "src": "864:37:0"
                  }
                ],
                "id": 92,
                "name": "Block",
                "src": "815:93:0"
              }
            ],
            "id": 93,
            "name": "FunctionDefinition",
            "src": "725:183:0"
          },
          {
            "attributes": {
              "name": "canMint",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 94,
                "name": "ParameterList",
                "src": "930:2:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 938,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 95,
                            "name": "Identifier",
                            "src": "943:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 19,
                                  "type": "bool",
                                  "value": "mintingFinished"
                                },
                                "id": 96,
                                "name": "Identifier",
                                "src": "952:15:0"
                              }
                            ],
                            "id": 97,
                            "name": "UnaryOperation",
                            "src": "951:16:0"
                          }
                        ],
                        "id": 98,
                        "name": "FunctionCall",
                        "src": "943:25:0"
                      }
                    ],
                    "id": 99,
                    "name": "ExpressionStatement",
                    "src": "943:25:0"
                  },
                  {
                    "id": 100,
                    "name": "PlaceholderStatement",
                    "src": "978:1:0"
                  }
                ],
                "id": 101,
                "name": "Block",
                "src": "933:53:0"
              }
            ],
            "id": 102,
            "name": "ModifierDefinition",
            "src": "914:72:0"
          },
          {
            "attributes": {
              "name": "onlyMintAgent",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 103,
                "name": "ParameterList",
                "src": "1014:2:0"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 938,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 104,
                            "name": "Identifier",
                            "src": "1027:7:0"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 23,
                                      "type": "mapping(address => bool)",
                                      "value": "mintAgents"
                                    },
                                    "id": 105,
                                    "name": "Identifier",
                                    "src": "1035:10:0"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 935,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 106,
                                        "name": "Identifier",
                                        "src": "1046:3:0"
                                      }
                                    ],
                                    "id": 107,
                                    "name": "MemberAccess",
                                    "src": "1046:10:0"
                                  }
                                ],
                                "id": 108,
                                "name": "IndexAccess",
                                "src": "1035:22:0"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 109,
                                "name": "Literal",
                                "src": "1061:4:0"
                              }
                            ],
                            "id": 110,
                            "name": "BinaryOperation",
                            "src": "1035:30:0"
                          }
                        ],
                        "id": 111,
                        "name": "FunctionCall",
                        "src": "1027:39:0"
                      }
                    ],
                    "id": 112,
                    "name": "ExpressionStatement",
                    "src": "1027:39:0"
                  },
                  {
                    "id": 113,
                    "name": "PlaceholderStatement",
                    "src": "1076:1:0"
                  }
                ],
                "id": 114,
                "name": "Block",
                "src": "1017:67:0"
              }
            ],
            "id": 115,
            "name": "ModifierDefinition",
            "src": "992:92:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Mint"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 116,
                        "name": "ElementaryTypeName",
                        "src": "1101:7:0"
                      }
                    ],
                    "id": 117,
                    "name": "VariableDeclaration",
                    "src": "1101:18:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 121,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 118,
                        "name": "ElementaryTypeName",
                        "src": "1121:7:0"
                      }
                    ],
                    "id": 119,
                    "name": "VariableDeclaration",
                    "src": "1121:14:0"
                  }
                ],
                "id": 120,
                "name": "ParameterList",
                "src": "1100:36:0"
              }
            ],
            "id": 121,
            "name": "EventDefinition",
            "src": "1090:47:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "MintingAgentChanged"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "addr",
                      "scope": 127,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 122,
                        "name": "ElementaryTypeName",
                        "src": "1168:7:0"
                      }
                    ],
                    "id": 123,
                    "name": "VariableDeclaration",
                    "src": "1168:12:0"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "state",
                      "scope": 127,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 124,
                        "name": "ElementaryTypeName",
                        "src": "1182:4:0"
                      }
                    ],
                    "id": 125,
                    "name": "VariableDeclaration",
                    "src": "1182:10:0"
                  }
                ],
                "id": 126,
                "name": "ParameterList",
                "src": "1167:26:0"
              }
            ],
            "id": 127,
            "name": "EventDefinition",
            "src": "1142:52:0"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "MintFinished"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 128,
                "name": "ParameterList",
                "src": "1217:2:0"
              }
            ],
            "id": 129,
            "name": "EventDefinition",
            "src": "1199:21:0"
          }
        ],
        "id": 130,
        "name": "ContractDefinition",
        "src": "149:1073:0"
      }
    ],
    "id": 131,
    "name": "SourceUnit",
    "src": "0:1222:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Mint",
          "type": "event"
        },
        "0x4b0adf6c802794c7dde28a08a4e07131abcff3bf9603cd71f14f90bec7865efa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addr",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "state",
              "type": "bool"
            }
          ],
          "name": "MintingAgentChanged",
          "type": "event"
        },
        "0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08": {
          "anonymous": false,
          "inputs": [],
          "name": "MintFinished",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x0E9030636b73858AD93fcBd5e1e783d5C4De1A5c"
    },
    "3": {
      "events": {
        "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "Mint",
          "type": "event"
        },
        "0x4b0adf6c802794c7dde28a08a4e07131abcff3bf9603cd71f14f90bec7865efa": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "addr",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "state",
              "type": "bool"
            }
          ],
          "name": "MintingAgentChanged",
          "type": "event"
        },
        "0xae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa08": {
          "anonymous": false,
          "inputs": [],
          "name": "MintFinished",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "spender",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "value",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8c7d63ba371282aec28a2168359729d5b33cf6ab"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-01-22T05:02:38.629Z"
}