
import styled,{css} from "styled-components";
//import { Hashtag } from '@styled-icons/heroicons-outline';


export const Container = styled.div`
  ${(props) => css`
    grid-area: CI;

    display: flex;
    align-items: center;

    padding: 0 17px;
    background-color: var(--primary);

    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;

  `}
`;

/*export const HashtagIcon = styled(Hashtag)`
  ${(props) => css`
    width: 24px;
    height: 24px;

    color: var(--symbol);

  `}
`;*/

export const Title = styled.div`
  ${(props) => css`
    

  `}
`;

export const Separator = styled.div`
  ${(props) => css`
    

  `}
`;

export const Description = styled.div`
  ${(props) => css`
    

  `}
`;