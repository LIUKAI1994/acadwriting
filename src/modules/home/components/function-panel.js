import React, { Component } from 'react';
import styled from 'styled-components';

import Button, { LinkButton } from '../../../components/button';

const Container = styled.div`
  position: relative;
  width: ${p => p.active ? '90%' : 0};
  height: 100%;
  transition: width .5s;
`;

const ShowBtnContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  display: ${p => p.active ? 'block' : 'none'};
`;

const ShowBtn = ({ active, onClick }) => (
  <ShowBtnContainer active={active}>
    <Button label='assistant' onClick={onClick}/>
  </ShowBtnContainer>
);

const HideBtnContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  display: ${p => p.active ? 'block' : 'none'};
  &:hover {
    transform: scale(1.05);
  }
`;

const HideBtn = ({ active, onClick }) => (
  <HideBtnContainer active={active}>
    <LinkButton label='hide assistant' onClick={onClick}/>
  </HideBtnContainer>
);

export default class FunctionPanel extends Component {
  render() {
    const { 
      functionPanelActive: active,
    } = this.props;

    return (
      <Container active={active}>
        <ShowBtn active={!active} onClick={this.togglePanel}/>
        <HideBtn active={active} onClick={this.togglePanel}/>
      </Container>
    );
  }

  togglePanel = () => {
    this.props.setFunctionPanelActive(!this.props.functionPanelActive);
  }
}
