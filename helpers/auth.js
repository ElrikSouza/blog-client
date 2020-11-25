const getUserIdFromToken = (token) => {
  const base64Payload = token.split('.')[1];
  const stringPayload = Buffer.from(base64Payload, 'base64').toString('ascii');
  const { _id } = JSON.parse(stringPayload);

  return _id;
};

export const saveLoginToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('userId', getUserIdFromToken(token));
};

export const getAccessToken = () => localStorage.getItem('token');
export const getUserId = () => localStorage.getItem('userId');
export const getAuthParams = () => ({
  headers: { authorization: `Bearer ${getAccessToken()}` },
});
