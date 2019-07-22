import { rem } from 'polished';
import theme from './theme';

const { colours, spacingUnit } = theme;

export const forms = `
  input[type=email],
  input[type=number],
  input[type=search],
  input[type=tel],
  input[type=text],
  input[type=url],
  textarea {
    border: none;
    border-radius: ${rem(spacingUnit / 4)};
    color: ${colours.textBlack};
    letter-spacing: ${rem(0.4)};
    width: 100%;
    
    &::placeholder {
      color: ${colours.textGrey};
    }
  }
`;

export default forms;
