export const visuallyHidden = `
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const accessibility = `
  .visually-hidden {
    ${visuallyHidden}
  }
  
  /**
   * for older browsers (e.g. IE9)
   * hides content both visually and from assistive technology
   */
  [hidden] { display: none; }  
`;

export default accessibility;
