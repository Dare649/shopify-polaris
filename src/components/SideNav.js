// Shopify/Polaris UI components
import {
  Frame, 
  Navigation,
  InlineGrid,
  Bleed
} from '@shopify/polaris';

// Shopify/Polaris Icons
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  OnlineStoreMinor,
  CirclePlusOutlineMinor,
  CustomersMinor,
  ContentMinor,
  FinancesMinor,
  AnalyticsMinor,
  MarketingMinor,
  DiscountsMinor,
  AppsMinor,
} from '@shopify/polaris-icons';

// Icon component from pages folder
import Icon from '../Pages/Icon';


function SideNav() {
  return (
    <InlineGrid columns={['oneThird', 'twoThirds']} >
      <Bleed marginBlockStart={'3200'}>
        <Frame >
          <Navigation location="/">
            <Navigation.Section
              items={[
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Home',
                  icon: HomeMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Orders',
                  icon: OrdersMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Products',
                  icon: ProductsMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Customers',
                  icon: CustomersMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Content',
                  icon: ContentMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Finances',
                  icon: FinancesMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Analytics',
                  icon: AnalyticsMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Marketing',
                  icon: MarketingMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Discounts',
                  icon: DiscountsMinor,
                },
              ]}
            />
            <Navigation.Section
              title="Sales channels"
              items={[
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Online Store',
                  icon: OnlineStoreMinor,
                },
              ]}
              action={{
                accessibilityLabel: 'Add sales channel',
                icon: CirclePlusOutlineMinor,
                onClick: () => {},
              }}
            />
            <Navigation.Section
              title="Apps"
              items={[
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Trust badges & icons - Iconito',
                  icon: AppsMinor,
                },
                {
                  url: '#',
                  excludePaths: ['#'],
                  label: 'Quantity Breaks-Bundel',
                  icon: AppsMinor,
                },
              ]}
              action={{
                accessibilityLabel: 'Add sales channel',
                icon: CirclePlusOutlineMinor,
                onClick: () => {},
              }}
            />
          </Navigation>
        </Frame>
    </Bleed> 
        <Icon/>
    </InlineGrid>
    
  );
}

export default SideNav;