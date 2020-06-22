import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from "react-intl";
import { SymbolTitle, SymbolDescription } from "components/typography";

const Container = styled.div``

function SymbolSummary({ title = 'test', description }) {
    const intl = useIntl();

    const intlDescription = intl.formatMessage({id: description});

    return (
        <Container>
            <SymbolTitle>
                <FormattedMessage id={title} />
            </SymbolTitle>
            {(intlDescription !== "#") && (
                <SymbolDescription>
                    {intlDescription}
                </SymbolDescription>
            )}
        </Container>
    )
}

SymbolSummary.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default SymbolSummary;