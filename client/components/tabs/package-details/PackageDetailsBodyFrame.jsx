import React from 'react';
import styled from 'styled-components';
import ArticleNumber from './ArticleNumber.jsx';
import Packages from './Packages.jsx';

const Container = styled.div`
  display: block;
  padding-bottom: 1.04em;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px 15px;
  width: 1060px;
  text-align: left;
  font-size: 0.6em;
`;

const Pad = styled.div`
  margin-bottom: 10px !important;
  color: #333;
  font-size: 13px;
`;

const PackageCount = styled.span`
  font-size: 13px;
  margin-bottom: 20px;
  padding-right: 0.104em;
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  font-family: verdana !important;
  font-weight: normal !important;
  font-size: 13px !important;
  border-collapse: collapse;
  text-decoration: none;
  color: #333;
  display: table;
  text-align: left;
`;

const Body = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
  font-family: verdana !important;
  font-weight: normal !important;
  font-size: 13px !important;
  border-collapse: collapse;
  color: #333;
  border-spacing: 2px;
  text-align: left;
`;

const RowDark = styled.tr`
  text-decoration: none;
  color: #333;
  font-family: Verdana, sans-serif;
  line-height: 13px;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  font-weight: normal !important;
  font-size: 13px !important;
  border-collapse: collapse;
  border-spacing: 2px;
  background-color: #f4f4f4;
`;

const Row = styled.tr`
  text-decoration: none;
  color: #333;
  font-family: Verdana, sans-serif;
  line-height: 13px;
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
  font-weight: normal !important;
  font-size: 13px !important;
  border-collapse: collapse;
  border-spacing: 2px;
`;

const Header = styled.th`
  background-color: white;
  text-align: left;
  font-weight: bold;
  display: table-cell;
  vertical-align: inherit;
  width: 80px;
`;

const IdCell = styled.td`
  width: 10em;
  padding-top: 4px;
  padding-right: 0px;
  padding-bottom: 4px;
  padding-left: 0px;
  display: table-cell;
  vertical-align: inherit;
`;

const LinkCell = styled.td`
  color: #3399fd;
  text-decoration: underline;
  cursor: pointer;
  line-height: 13px;
`;

class PackageDetailsBodyFrame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Container>
            <Pad>
              <PackageCount>Packages: </PackageCount>
              &nbsp;1
            </Pad>
            <Table>
              <Body>
                <Row>
                  <Header>Article number</Header>
                  <Header>Packages</Header>
                  <Header>Width</Header>
                  <Header>Height</Header>
                  <Header>Length</Header>
                  <Header>Diameter</Header>
                </Row>
                <RowDark>
                  <IdCell>40323437</IdCell>
                  <IdCell>	1</IdCell>
                  <IdCell>	16 ¼ "</IdCell>
                  <IdCell>7 ½ "</IdCell>
                  <IdCell>16 ¾ "</IdCell>
                  <IdCell>-</IdCell>
                </RowDark>
              </Body>
            </Table>
          </Container>;
    }
}

export default PackageDetailsBodyFrame;