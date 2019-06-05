import React, { FC, useEffect, useState } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { RouteComponentProps, Redirect, withRouter } from 'react-router';
import axios from 'axios';
import SectionList from '../../containers/SectionList';
import Spinner from '../Spinner';
import { API } from '../../types/ApiProps';

const useFetchStroy = (id: string) => {
  const initialValue = {
    loaded: false,
    data: {
      id: '',
      type: '',
      attributes: {
        characterName: '',
        userName: '',
        sections: [],
      },
    },
  };
  const [state, setState] = useState<API>(initialValue);

  useEffect(() => {
    const fetchStroy = async () => {
      const result = await axios.get<API>(
        `http://localhost:5000/api/v1/stories/${id}`,
      );

      return result;
    };

    fetchStroy()
      .then(response => {
        const { data } = response.data;
        setState({ loaded: true, data });
      })
      .catch(err => {
        console.info(err);
      });
  }, [id]);

  return state;
};

// TODO: このコンポーネントはPreview/indexと大体同じなので共通化したくなるが、APIとの連携が終わってからにする
const Story: FC<RouteComponentProps<{ id: string }>> = ({
  history,
  location,
  match,
}) => {
  const { loaded, data } = useFetchStroy(match.params.id);

  return (
    <>
      {loaded ? (
        <>
          <Container text style={{ marginTop: '7em' }}>
            <Header as="h1" data-cy="charactername">
              {data.attributes.characterName}
            </Header>
          </Container>

          <Container text>
            <Header as="h1" data-cy="username">
              {data.attributes.userName}
            </Header>
          </Container>

          <SectionList sections={data.attributes.sections} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default withRouter(Story);
