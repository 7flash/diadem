import React, { Component } from 'react';

import Web3 from 'web3';
import contract from 'truffle-contract';

import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import NumberInput from 'grommet/components/NumberInput';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';

import InfographicSection from "../components/InfographicSection";

import DiademToken from '../abi/Diadem';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      balance: 0,
      eth: "0",
      diadem: "0",
      rate: 2500,
      tokenAddress: "0x8c7d63ba371282aec28a2168359729d5b33cf6ab",
      tokensaleAddress: "0xf8372fd57db31a62ac999daf15422351907cbe28",
      tokenContract: null,
      metamaskConnected: false,
      web3: null
    };

    this._onChangeEth = this._onChangeEth.bind(this);
    this._onChangeDiadem = this._onChangeDiadem.bind(this);
    this._onSubmit = this._onSubmit.bind(this);

    this._calculateDiadem = this._calculateDiadem.bind(this);
    this._calculateEth = this._calculateEth.bind(this);
    this._updateBalance = this._updateBalance.bind(this);

    this._initializeToken = this._initializeToken.bind(this);
    this._connectMetamask = this._connectMetamask.bind(this);
    this._connectProxy = this._connectProxy.bind(this);
  }

  componentDidMount() {
    this._connectMetamask()
      .then(this._initializeToken)
      .then(this._updateBalance)
      .catch((reason) => {
        console.error(reason);

        return Promise.resolve()
          .then(this._connectProxy)
          .then(this._initializeToken);
      }).catch((reason) => {
        console.error(reason);
      });
  }

  _connectMetamask() {
    return new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        if(window.web3 && window.web3.currentProvider) {
          this.setState({
            web3: new Web3(window.web3.currentProvider),
            metamaskConnected: true
          });
          resolve();
        } else {
          reject("Cannot connect to metamask");
        }
      })
    })
  }

  _connectProxy() {
    if(!this.props.proxy) {
      console.error("Cannot connect to proxy");
      return;
    }
    this.setState({
      web3: new Web3(
        new Web3.providers.HttpProvider(this.props.proxy)
      )
    });
  }

  _initializeToken() {
    if(!this.state.web3 || !this.state.web3.currentProvider) {
      console.error("Cannot initialize token");
      return;
    }

    this.setState({ tokenContract: contract(DiademToken) });
    this.state.tokenContract.setProvider(this.state.web3.currentProvider);

    return true;
  }

  _updateBalance() {
    this.tokenContract.balanceOf.call(this.state.web3.accounts[0]).then((balance) => {
      this.setState({ balance });
    });
  }

  _onSubmit(event) {
    event.preventDefault();

    if(!this.state.metamaskConnected || !this.state.web3) {
      this.setState({ metamaskLayer: true });
      console.error("Cannot send payment with metamask");
      return;
    }

    const balance = this.state.balance;
    const newBalance = Number.parseInt(balance) + Number.parseInt(this.state.diadem);
    const waitingBalanceStatus = `${balance} (+${this.state.diadem})`;

    this.setState({ balance: waitingBalanceStatus });

    this.state.web3.eth.sendTransaction({
      to: this.state.tokensaleAddress,
      from: this.state.web3.eth.accounts[0],
      value: this.state.web3.toWei(this.state.eth, 'ether')
    }, (err, transactionHash) => {
      if(err) {
        this._updateBalance();
        console.error(err);
        return;
      }

      const updatedBalanceStatus = `${newBalance}`;

      this.setState({ balance: updatedBalanceStatus });
    })
  }

  _onChangeEth(event) {
    const eth = event.target.value;
    const diadem = this._calculateDiadem(eth).toString();
    this.setState({ diadem, eth });
  }

  _onChangeDiadem(event) {
    const diadem = event.target.value;
    const eth = this._calculateEth(diadem).toString();
    this.setState({ diadem, eth });
  }

  _calculateDiadem(eth) {
    return eth * this.state.rate;
  }

  _calculateEth(diadem) {
    return diadem / this.state.rate;
  }

  _updateBalance() {
    if(!this.state.tokenContract || !this.state.tokenContract.deployed || !this.state.web3) {
      console.error("Cannot update balance");
      return;
    }

    const account = this.state.web3.eth.accounts[0];
    const format = this.state.web3.fromWei;

    this.state.tokenContract.deployed().then(instance => {
      return instance.balanceOf.call(account).then((balance) => {
        this.setState({ balance: balance.div(10**18).toNumber() });
      });
    });
  }

  render() {
    return (
      <Article ref="article" className="home">
        <div>
          <InfographicSection className="infographic__section infographic__section--start">
            <div className="infographic__section-header">
              <Headline size="medium" strong={true} margin="none">Decentralized achievements network</Headline>
              <Heading tag="h4" margin="none">Tokensale address: {this.state.tokensaleAddress}</Heading>
              <Heading tag="h4" margin="none">Token address: {this.state.tokenAddress}</Heading>
              <Heading tag="h4" margin="none">Your balance: {this.state.balance} DIADEM</Heading>
            </div>
            <Headline size="small">
              The economy built upon blockchain and social networks would give everyone transparent access
                to the capital and motivation in order to develop the society. (Whitepaper)
            </Headline>
              <Form plain={true} onSubmit={this._onSubmit}>
                <Box direction="row" justify="center">
                <FormField label="ETH"><TextInput value={this.state.eth} onDOMChange={this._onChangeEth} /></FormField>
                <FormField label="DIADEM"><TextInput value={this.state.diadem} onDOMChange={this._onChangeDiadem} /></FormField>
                <Button className="tip-button" primary={true} type="submit" onClick={this._onSubmit} />
                </Box>
              </Form>
          </InfographicSection>
        </div>
        {this.metamaskLayer &&
        <div>
          <Headline size="medium">
            Please connect to MetaMask and refresh the page.
          </Headline>
        </div>
        }
      </Article>
    );
  }
}
