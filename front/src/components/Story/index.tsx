import React, { FC, useEffect, useState } from 'react';
import { Header, Container } from 'semantic-ui-react';
import { RouteComponentProps, Redirect, withRouter } from 'react-router';
import axios from 'axios';
import SectionList from '../../containers/SectionList';
import Spinner from '../Spinner';
import { API } from '../../types/ApiProps';
import { DEFAULT_API_CONFIG } from '../../containers/APIConfig';

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
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchStroy = async () => {
      const instance = axios.create(DEFAULT_API_CONFIG);
      const result = await instance.get<API>(`/stories/${id}`);

      return result;
    };

    fetchStroy()
      .then(response => {
        const { data } = response.data;
        setState({ loaded: true, data });
      })
      .catch(() => {
        // TODO: エラーハンドリングは一旦これで
        setIsError(true);
      });
  }, [id]);

  return { loaded: state.loaded, data: state.data, error: isError };
};

// TODO: このコンポーネントはPreview/indexと大体同じなので共通化したくなるが、APIとの連携が終わってからにする
const Story: FC<RouteComponentProps<{ id: string }>> = ({ match }) => {
  const { loaded, data, error } = useFetchStroy(match.params.id);

  return error ? (
    <Redirect to="/" />
  ) : (
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
