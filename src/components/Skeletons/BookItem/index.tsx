import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonBookItem: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" padding={10}>
        <SkeletonPlaceholder.Item width={80} height={80} />
        <SkeletonPlaceholder.Item flex={1} marginLeft={10}>
          <SkeletonPlaceholder.Item
            width={120}
            height={20}
            alignSelf="center"
          />
          <SkeletonPlaceholder.Item
            flex={1}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end">
            <SkeletonPlaceholder.Item width={80} height={15} />
            <SkeletonPlaceholder.Item width={80} height={15} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonBookItem;
