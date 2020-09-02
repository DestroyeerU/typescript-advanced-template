type ImageSourcePropType = import('react-native').ImageSourcePropType;

declare module '*.svg' {
  const content: ImageSourcePropType;
  export default content;
}
