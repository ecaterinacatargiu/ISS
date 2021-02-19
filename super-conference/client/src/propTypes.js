import  PropTypes from "prop-types"

const proposalType = PropTypes.exact({
    abstract: PropTypes.number.isRequired,
    file: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,

});


export {proposalType}
