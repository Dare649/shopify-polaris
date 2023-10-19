// Shopify/Polaris UI components
import { 
    Button,
    BlockStack,
    InlineGrid,
    InlineStack
} from "@shopify/polaris";


const ActionButtons = ({onClick}) =>{
    return(
        <BlockStack align="center" as="div">
            <InlineGrid alignItems="center" >
                <InlineStack align="space-between">
                    <Button size="large" variant="primary">Icons</Button>
                    <Button size="large" variant="primary">Block</Button>
                    <Button size="large" variant="primary" onClick={onClick}>Styles</Button>
                </InlineStack>
            </InlineGrid>
        </BlockStack>
    )
};

export default ActionButtons;