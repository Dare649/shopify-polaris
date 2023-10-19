// Shopify/Polaris UI components
import {
  Layout,
  Text,
  Button,
  InlineGrid,
  InlineStack,
  Divider,
  Card,
  Checkbox,
  BlockStack
} from '@shopify/polaris';

// RangeSlider component from Shopify/Polaris
import RangerSlider from './RangerSlider';

// React Hook
import { useState } from 'react';

// ActionButtons component containing the icon, blocks and styles button
// onClick of the styles button users will be able to view the style card
// and carry out the neccessary actions.
import ActionButtons from './ActionButtons';


const StyleTab = () => {
  const [open, setOpen] = useState(false)
  return (
      <Layout >
        <Layout.Section>
          <ActionButtons 
            onClick={() => setOpen((prev)=> !prev)}
          />
        </Layout.Section>
        {
          open ? 
          (
            <Layout.Section>
          <Card> 
            <Text as='h1' fontWeight='bold' variant='headingLg'>ICON SIZE</Text>
              <InlineGrid columns={['twoThirds','oneThird']} gap={'1000'} alignItems='center' >
                <RangerSlider />
                <Button disclosure="50" size='large' fullWidth textAlign='left'>
                  <span>50</span>
                  <span>px</span>
                </Button>
              </InlineGrid>
            <Divider borderColor='border-secondary' borderWidth='100'/> 
            <Text as='h1' fontWeight='bold' variant='headingLg'>COLORS</Text>
            <BlockStack align='space-between' >
              <InlineGrid columns={['oneHalf', 'oneHalf']}>
                <InlineGrid>
                  <InlineStack>
                    <Text variant='bodyLg' fontWeight='regular'>Background Color</Text>
                    <Button >
                      <Checkbox/>
                      #ffffff
                    </Button>
                  </InlineStack>
                  <InlineStack>
                    <Text variant='bodyLg' fontWeight='regular'>Icon Color</Text>
                    <Button>
                      <Checkbox/>
                      #ffffff
                    </Button>
                  </InlineStack>
                </InlineGrid>
                <InlineGrid>
                  <InlineStack>
                    <Text variant='bodyLg' fontWeight='regular'>Title Color</Text>
                    <Button >
                      <Checkbox/>
                      #ffffff
                    </Button>
                  </InlineStack>
                  <InlineStack>
                    <Text variant='bodyLg' fontWeight='regular'>Subtitle Color</Text>
                    <Button >
                      <Checkbox/>
                      #ffffff
                    </Button>
                  </InlineStack>
                </InlineGrid>
              </InlineGrid>
            </BlockStack>
            <Text as='h1' fontWeight='bold' variant='headingLg'>TYPOGRAPHY</Text>
            <InlineGrid columns={['oneHalf','oneHalf']} gap={'1000'}>
              <Text as='p' fontWeight='medium'>
                subtitle font style
                <Button disclosure fullWidth textAlign='left'>14</Button>
              </Text>
              <Text as='p' fontWeight='medium'>
                subtitle font style
                <Button disclosure fullWidth textAlign='left'>Bold</Button>
              </Text>
            </InlineGrid>
            <InlineGrid columns={['oneHalf','oneHalf']} gap={'1000'}>
              <Text as='p' fontWeight='medium' >
                subtitle font style
                <Button disclosure fullWidth textAlign='left'>12</Button>
              </Text>
              <Text as='p' fontWeight='medium'>
                subtitle font style
                <Button disclosure fullWidth textAlign='left'>Regular</Button>
              </Text>
            </InlineGrid>
            <Divider borderColor='border-secondary' borderWidth='100'/>
            <Text as='h1' fontWeight='bold' variant='headingLg'>SPACING</Text>
              <Text as='p' fontWeight='medium'>Block size</Text>
              <InlineGrid columns={['twoThirds','oneThird']} gap={'1000'} alignItems='center' >
                <RangerSlider />
                  <Button disclosure="50" size='large' fullWidth textAlign='left'>
                    <span>0</span>
                    <span>px</span>
                  </Button>
              </InlineGrid>
                <Text as='h1' fontWeight='bold' variant='headingLg'>BORDER LOCATION</Text>
              <InlineGrid columns={['oneHalf','oneHalf']} gap={'1000'}>
                <Text as='p' fontWeight='medium'>
                  Goes up
                  <Button disclosure fullWidth textAlign='left'>0</Button>
                </Text>
                <Text as='p' fontWeight='medium'>
                  Goes down
                  <Button disclosure fullWidth textAlign='left'>0</Button>
                </Text>
            </InlineGrid>
            <Text as='p' fontWeight='medium'>Space between the blocks</Text>
              <InlineGrid columns={['twoThirds','oneThird']} gap={'1000'} alignItems='center' >
                <RangerSlider />
                  <Button disclosure="50" size='large' fullWidth textAlign='left'>
                    <span>0</span>
                    <span>%</span>
                  </Button>
              </InlineGrid>
          </Card>
          <InlineGrid alignItems='start' >
            <InlineStack>
              <Button size='large' variant='primary' tone='success' >Save</Button>
              <Button size='large' variant="primary" tone="critical">Delete</Button>
            </InlineStack>
          </InlineGrid>
        </Layout.Section>
          ):
          ("")
        }
      </Layout>
   
  )
}

export default StyleTab

