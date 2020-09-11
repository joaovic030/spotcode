import React, { Fragment } from 'react';
import { Button, Columns, Heading } from 'react-bulma-components';
import styled from 'styled-components'
import SectionWrapper from '../../components/common/section_wrapper'

const MainHeading = styled(Heading)`
  margin-top: 50px;
`

const ButtonSubscribe = styled(Button)`
  border-width: 2px;
  margin-top: 50px;
`

const DescriptionList = styled.ul`
  margin-top: 50px;
  font-size: 20px;
  list-style-type: square;
`


const HomeScreen = () => {
  return (
    <SectionWrapper>
      <Columns>
        <Columns.Column>
          <MainHeading className='has-text-weight-light has-text-centered has-text-dark' size={1}>
            SEU APP DE <br /><span className='has-text-success'>MÚSICA</span>
          </MainHeading>
        </Columns.Column>
      </Columns>
      <Columns className="is-centered is-mobile">
        <Columns.Column mobile={{ size: 8, offset: 1 }} desktop={{ size: 4, offset: 2 }}>
          <DescriptionList className='has-text-dark'>
            <li>Suas músicas <b>Favoritas</b></li>
            <li>Seus <b>Podcasts</b></li>
            <li>Os <b>Lançamentos</b></li>
            <li>As novas <b>Descobertas</b></li>
          </DescriptionList>
        </Columns.Column>
      </Columns>
      <Columns className="has-text-centered">
        <Columns.Column>
          <ButtonSubscribe className='is-success is-outlined is-large has-text-dark'>CADASTRAR AGORA</ButtonSubscribe>
        </Columns.Column>
      </Columns>
    </SectionWrapper>
  );
}
export default HomeScreen;