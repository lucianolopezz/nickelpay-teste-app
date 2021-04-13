import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonCharacterDetail: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flex={1}
        alignItems="center"
        justifyContent="center">
        <SkeletonPlaceholder.Item width={80} height={80} />
        <SkeletonPlaceholder.Item width={120} height={15} marginTop={100} />
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flex={1}>
        <SkeletonPlaceholder.Item width="100%" height={80} marginTop={150} />
        <SkeletonPlaceholder.Item width="100%" height={30} marginTop={250} />
        <SkeletonPlaceholder.Item flex={1} flexDirection="row">
          <SkeletonPlaceholder.Item width={80} height={80} marginTop={300} />
          <SkeletonPlaceholder.Item
            width={80}
            height={80}
            marginTop={300}
            marginLeft={10}
          />
          <SkeletonPlaceholder.Item
            width={80}
            height={80}
            marginTop={300}
            marginLeft={10}
          />
          <SkeletonPlaceholder.Item
            width={80}
            height={80}
            marginTop={300}
            marginLeft={10}
          />
          <SkeletonPlaceholder.Item
            width={80}
            height={80}
            marginTop={300}
            marginLeft={10}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonCharacterDetail;
