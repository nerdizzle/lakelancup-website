const getDefaultApiInfo = async (req, res) => {
    const msg = {
        owner: "chief wiggum"
    };
    res.send(msg);
};
export { getDefaultApiInfo };
export default getDefaultApiInfo;
