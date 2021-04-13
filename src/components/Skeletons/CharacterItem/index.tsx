import React from 'react';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonCharacterItem: React.FC = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flex={1}
        flexDirection="row"
        padding={20}
        marginLeft={10}
        marginRight={10}>
        <SkeletonPlaceholder.Item
          width={20}
          height={20}
          borderRadius={10}
          marginBottom={20}
        />
        <SkeletonPlaceholder.Item
          width={120}
          height={20}
          borderRadius={5}
          marginLeft={20}
        />
        <SkeletonPlaceholder.Item
          flex={1}
          alignItems="flex-end"
          justifyContent="flex-end">
          <SkeletonPlaceholder.Item width={50} height={20} borderRadius={5} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SkeletonCharacterItem;
