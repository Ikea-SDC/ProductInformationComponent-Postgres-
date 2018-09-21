import React from 'react';
import styled from 'styled-components';


const LinksHeadline = styled.div`
  font-weight: bold;
  line-height: 18px;
  margin: 0;
  margin-bottom: 10px;
  display: block;
`;

const DownloadDetails = styled.div`
  margin-bottom: 19px !important;
  font-size: 13px;
  text-align: left;
`;

const AttachmentsContainer = styled.div`
  color: #333;
  font-size: 11px;
  display: block;
  text-align: left;
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
  width: 200px
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

const LinkType = styled.span`
  color: #333;
  font-family: Verdana, sans-serif;
`;


const Downloads = () => {
    return <div>
        <LinksHeadline>Downloads</LinksHeadline>
        <DownloadDetails>
          Only the latest version of the documents is available for
          download. This means that there maybe a difference in this version
          and the printed version.
        </DownloadDetails>
        <AttachmentsContainer>
          <Table>
            <Body>
              <Header>Assembly instructions</Header>
              <RowDark>
                    <IdCell>403.234.37</IdCell>
                    <LinkCell>HEKTAR Awesome lamp link to instructions<LinkType>(PDF)</LinkType></LinkCell>
              </RowDark>
            </Body>
          </Table>
            <Table>
                <Body>
                    <Header>Manuals</Header>
                    <RowDark>
                        <IdCell>403.234.37</IdCell>
                        <LinkCell>HEKTAR Awesome lamp link to instructions<LinkType>(PDF)</LinkType></LinkCell>
                    </RowDark>
                    <Row>
                        <IdCell>403.234.37</IdCell>
                        <LinkCell>HEKTAR Awesome lamp link to instructions<LinkType>(PDF)</LinkType></LinkCell>
                    </Row>
                </Body>
            </Table>
        </AttachmentsContainer>
      </div>;
}

export default Downloads;