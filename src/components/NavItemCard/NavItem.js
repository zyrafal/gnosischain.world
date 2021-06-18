import React from 'react';
import {
  Grid,
  Link,
  Avatar,
  Typography,
} from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import classnames from 'classnames';

import Box from '../Box';
import BoxStyles from '../Box.module.css';

import {
  trackEvent,
  formatWebpImageSrc,
} from '../../services';

export function SwitchNetworkItem({
  item: {
    tag_en,
    logo,
    name,
    name_en,
    desc,
    desc_en,
    url,
    url_en,
    logoWidthAuto,
    logoHeightAuto,
  },
  language,
}) {

  const size = 30;

  const website = language === 'zh' ? url : (url_en || url);

  // render item desc
  const renderDesc = () => {
    if (language === 'zh' && desc) {
      return desc;
    } else if (language === 'en' && desc_en) {
      return desc_en;
    }
    let url = (website || '').replace(/htt(p|ps):\/\//, '');
    if (url.slice('-1') === '/') {
      url = url.slice(0, url.length - 1);
    }
    return url;
  }

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum?.request({
          id: '1', jsonrpc: '2.0', method: 'wallet_addEthereumChain', params: [{
            chainId: '0x64',
            chainName: 'xDai',
            rpcUrls: ['https://dai.poa.network'],
            blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
            nativeCurrency: {
              name: 'xDai',
              symbol: 'XDAI',
              decimals: 18,
            },
          },]
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Box
        onClick={async () => { await switchNetwork() }}
        display="flex"
        flexDirection="row"
        className={classnames("cardItem", BoxStyles.cardItem)}
        style={{ cursor: "pointer" }}
        borderRadius={8}>
        <Box mr={1}>
          <LazyLoad
            height={size}
            style={{ width: size }}
            once>
            <Avatar
              alt={language === 'zh' ? name : (name_en || name)}
              src={formatWebpImageSrc(logo)}
              style={{
                height: logoHeightAuto ? 'auto' : size,
                width: logoWidthAuto ? 'auto' : size
              }}
              imgProps={{
                height: logoHeightAuto ? 'auto' : size,
                width: logoWidthAuto ? 'auto' : size
              }}
            >
              {(language === 'zh' ? name : (name_en || name)).slice(0, 1)}
            </Avatar>
          </LazyLoad>
        </Box>
        <Box>
          <Typography
            variant="body1"
            className="cardItem_title"
            style={{ fontWeight: 500 }}>
            {language === 'zh' ? name : (name_en || name)}
          </Typography>
          <Typography
            variant="caption"
            style={{ color: '#999', wordBreak: 'break-all' }}>
            {renderDesc()}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
};

const NavItem = ({
  item: {
    tag_en,
    logo,
    name,
    name_en,
    desc,
    desc_en,
    url,
    url_en,
    logoWidthAuto,
    logoHeightAuto,
  },
  language,
}) => {

  const size = 30;

  const website = language === 'zh' ? url : (url_en || url);

  // render item desc
  const renderDesc = () => {
    if (language === 'zh' && desc) {
      return desc;
    } else if (language === 'en' && desc_en) {
      return desc_en;
    }
    let url = (website || '').replace(/htt(p|ps):\/\//, '');
    if (url.slice('-1') === '/') {
      url = url.slice(0, url.length - 1);
    }
    return url;
  }

  return (
    <Grid item xs={6} sm={4} md={3}>
      <Link
        color="textPrimary"
        href={`${website}?utm_resource=xdai.world`}
        target="_blank"
        underline='none'
        onClick={() => {
          trackEvent(tag_en, (name_en || name));
        }}>
        <Box
          display="flex"
          flexDirection="row"
          className={classnames("cardItem", BoxStyles.cardItem)}
          borderRadius={8}>
          <Box mr={1}>
            <LazyLoad
              height={size}
              style={{ width: size }}
              once>
              <Avatar
                alt={language === 'zh' ? name : (name_en || name)}
                src={formatWebpImageSrc(logo)}
                style={{
                  height: logoHeightAuto ? 'auto' : size,
                  width: logoWidthAuto ? 'auto' : size
                }}
                imgProps={{
                  height: logoHeightAuto ? 'auto' : size,
                  width: logoWidthAuto ? 'auto' : size
                }}
              >
                {(language === 'zh' ? name : (name_en || name)).slice(0, 1)}
              </Avatar>
            </LazyLoad>
          </Box>
          <Box>
            <Typography
              variant="body1"
              className="cardItem_title"
              style={{ fontWeight: 500 }}>
              {language === 'zh' ? name : (name_en || name)}
            </Typography>
            <Typography
              variant="caption"
              style={{ color: '#999', wordBreak: 'break-all' }}>
              {renderDesc()}
            </Typography>
          </Box>
        </Box>
      </Link>
    </Grid>
  )
}

export default NavItem;
