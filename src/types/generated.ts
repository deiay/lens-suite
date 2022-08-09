export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BlockchainData: string;
  BroadcastId: string;
  ChainId: string;
  CollectModuleData: string;
  ContractAddress: string;
  CreateHandle: string;
  Cursor: string;
  DateTime: string;
  Ens: string;
  EthereumAddress: string;
  FollowModuleData: string;
  Handle: string;
  HandleClaimIdScalar: string;
  InternalPublicationId: string;
  Jwt: string;
  LimitScalar: string;
  Markdown: string;
  MimeType: string;
  NftOwnershipId: string;
  Nonce: string;
  ProfileId: string;
  PublicationId: string;
  PublicationUrl: string;
  ReferenceModuleData: string;
  Search: string;
  Signature: string;
  Sources: string;
  TimestampScalar: string;
  TxHash: string;
  TxId: string;
  UnixTimestamp: string;
  Url: string;
  Void: string;
}

export interface AchRequest {
  ethereumAddress: Scalars['EthereumAddress'];
  freeTextHandle?: InputMaybe<Scalars['Boolean']>;
  handle?: InputMaybe<Scalars['CreateHandle']>;
  overrideTradeMark: Scalars['Boolean'];
  secret: Scalars['String'];
}

export interface ApprovedModuleAllowanceAmountRequest {
  collectModules: Array<CollectModules | `${CollectModules}`>;
  /** The contract addresses for the module approved currencies you want to find information on about the user */
  currencies: Array<Scalars['ContractAddress']>;
  followModules: Array<FollowModules | `${FollowModules}`>;
  referenceModules: Array<ReferenceModules | `${ReferenceModules}`>;
}

export interface BroadcastRequest {
  id: Scalars['BroadcastId'];
  signature: Scalars['Signature'];
}

export interface BurnProfileRequest {
  profileId: Scalars['ProfileId'];
}

/** The challenge request */
export interface ChallengeRequest {
  /** The ethereum address you want to login with */
  address: Scalars['EthereumAddress'];
}

export interface ClaimHandleRequest {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  freeTextHandle?: InputMaybe<Scalars['CreateHandle']>;
  id?: InputMaybe<Scalars['HandleClaimIdScalar']>;
}

export interface CollectModuleParams {
  /** The collect fee collect module */
  feeCollectModule?: InputMaybe<FeeCollectModuleParams>;
  /** The collect empty collect module */
  freeCollectModule?: InputMaybe<FreeCollectModuleParams>;
  /** The collect limited fee collect module */
  limitedFeeCollectModule?: InputMaybe<LimitedFeeCollectModuleParams>;
  /** The collect limited timed fee collect module */
  limitedTimedFeeCollectModule?: InputMaybe<LimitedTimedFeeCollectModuleParams>;
  /** The collect revert collect module */
  revertCollectModule?: InputMaybe<Scalars['Boolean']>;
  /** The collect timed fee collect module */
  timedFeeCollectModule?: InputMaybe<TimedFeeCollectModuleParams>;
}

/** The collect module types */
export type CollectModules =
  | 'FeeCollectModule'
  | 'FreeCollectModule'
  | 'LimitedFeeCollectModule'
  | 'LimitedTimedFeeCollectModule'
  | 'RevertCollectModule'
  | 'TimedFeeCollectModule';

export interface CreateCollectRequest {
  publicationId: Scalars['InternalPublicationId'];
}

export interface CreateMirrorRequest {
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what you want to mirror on remember if this is a comment it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module info */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreateProfileRequest {
  /** The follow module */
  followModule?: InputMaybe<FollowModuleParams>;
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  handle: Scalars['CreateHandle'];
  /** The profile picture uri */
  profilePictureUri?: InputMaybe<Scalars['Url']>;
}

export interface CreatePublicCommentRequest {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** Publication id of what your comments on remember if this is a comment you commented on it will be that as the id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreatePublicPostRequest {
  /** The collect module */
  collectModule: CollectModuleParams;
  /** The metadata uploaded somewhere passing in the url to reach it */
  contentURI: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The reference module */
  referenceModule?: InputMaybe<ReferenceModuleParams>;
}

export interface CreatePublicSetProfileMetadataURIRequest {
  /** The metadata uploaded somewhere passing in the url to reach it */
  metadata: Scalars['Url'];
  /** Profile id */
  profileId: Scalars['ProfileId'];
}

export interface CreateSetDefaultProfileRequest {
  /** Profile id */
  profileId: Scalars['ProfileId'];
}

export interface CreateSetFollowModuleRequest {
  /** The follow module info */
  followModule: FollowModuleParams;
  profileId: Scalars['ProfileId'];
}

export interface CreateSetFollowNFTUriRequest {
  /** The follow NFT URI is the NFT metadata your followers will mint when they follow you. This can be updated at all times. If you do not pass in anything it will create a super cool changing NFT which will show the last publication of your profile as the NFT which looks awesome! This means people do not have to worry about writing this logic but still have the ability to customise it for their followers */
  followNFTURI?: InputMaybe<Scalars['Url']>;
  profileId: Scalars['ProfileId'];
}

export interface CreateToggleFollowRequest {
  enables: Array<Scalars['Boolean']>;
  profileIds: Array<Scalars['ProfileId']>;
}

export interface DefaultProfileRequest {
  ethereumAddress: Scalars['EthereumAddress'];
}

export interface DoesFollow {
  /** The follower address remember wallets follow profiles */
  followerAddress: Scalars['EthereumAddress'];
  /** The profile id */
  profileId: Scalars['ProfileId'];
}

export interface DoesFollowRequest {
  /** The follower infos */
  followInfos: Array<DoesFollow>;
}

export interface ExploreProfilesRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  sortCriteria: ProfileSortCriteria | `${ProfileSortCriteria}`;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
}

export interface ExplorePublicationRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** If you wish to exclude any results for profile ids */
  excludeProfileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** If you want the randomizer off (default on) */
  noRandomize?: InputMaybe<Scalars['Boolean']>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes | `${PublicationTypes}`>>;
  sortCriteria: PublicationSortCriteria | `${PublicationSortCriteria}`;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  timestamp?: InputMaybe<Scalars['TimestampScalar']>;
}

export interface FeeCollectModuleParams {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
}

export interface FeeFollowModuleParams {
  /** The follow module amount info */
  amount: ModuleFeeAmountParams;
  /** The follow module recipient address */
  recipient: Scalars['EthereumAddress'];
}

export interface FeeFollowModuleRedeemParams {
  /** The expected amount to pay */
  amount: ModuleFeeAmountParams;
}

export interface Follow {
  followModule?: InputMaybe<FollowModuleRedeemParams>;
  profile: Scalars['ProfileId'];
}

export interface FollowModuleParams {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleParams>;
  /** The empty follow module */
  freeFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The profile follow module */
  profileFollowModule?: InputMaybe<Scalars['Boolean']>;
  /** The revert follow module */
  revertFollowModule?: InputMaybe<Scalars['Boolean']>;
}

export interface FollowModuleRedeemParams {
  /** The follower fee follower module */
  feeFollowModule?: InputMaybe<FeeFollowModuleRedeemParams>;
  /** The profile follower module */
  profileFollowModule?: InputMaybe<ProfileFollowModuleRedeemParams>;
}

/** The follow module types */
export type FollowModules =
  | 'FeeFollowModule'
  | 'ProfileFollowModule'
  | 'RevertFollowModule';

export interface FollowRequest {
  follow: Array<Follow>;
}

export interface FollowerNftOwnedTokenIdsRequest {
  address: Scalars['EthereumAddress'];
  profileId: Scalars['ProfileId'];
}

export interface FollowersRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  profileId: Scalars['ProfileId'];
}

export interface FollowingRequest {
  address: Scalars['EthereumAddress'];
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
}

export interface FraudReasonInputParams {
  reason: PublicationReportingReason | `${PublicationReportingReason}`;
  subreason: PublicationReportingFraudSubreason | `${PublicationReportingFraudSubreason}`;
}

export interface FreeCollectModuleParams {
  /** Follower only */
  followerOnly: Scalars['Boolean'];
}

export interface GenerateModuleCurrencyApprovalDataRequest {
  collectModule?: InputMaybe<CollectModules | `${CollectModules}`>;
  currency: Scalars['ContractAddress'];
  followModule?: InputMaybe<FollowModules | `${FollowModules}`>;
  referenceModule?: InputMaybe<ReferenceModules | `${ReferenceModules}`>;
  /** Floating point number as string (e.g. 42.009837). The server will move its decimal places for you */
  value: Scalars['String'];
}

export interface GlobalProtocolStatsRequest {
  /** Unix time from timestamp - if not supplied it will go from 0 timestamp */
  fromTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** Unix time to timestamp - if not supplied it go to the present timestamp */
  toTimestamp?: InputMaybe<Scalars['UnixTimestamp']>;
}

export interface HasTxHashBeenIndexedRequest {
  /** Tx hash.. if your using the broadcaster you should use txId due to gas price upgrades */
  txHash?: InputMaybe<Scalars['TxHash']>;
  /** Tx id.. if your using the broadcaster you should always use this field */
  txId?: InputMaybe<Scalars['TxId']>;
}

export interface HidePublicationRequest {
  /** Publication id */
  publicationId: Scalars['InternalPublicationId'];
}

export interface IllegalReasonInputParams {
  reason: PublicationReportingReason | `${PublicationReportingReason}`;
  subreason: PublicationReportingIllegalSubreason | `${PublicationReportingIllegalSubreason}`;
}

export interface LimitedFeeCollectModuleParams {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
}

export interface LimitedTimedFeeCollectModuleParams {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** The collect module limit */
  collectLimit: Scalars['String'];
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
}

/** The metadata display types */
export type MetadataDisplayType =
  | 'date'
  | 'number'
  | 'string';

export interface ModuleFeeAmountParams {
  /** The currency address */
  currency: Scalars['ContractAddress'];
  /** Floating point number as string (e.g. 42.009837). It could have the entire precision of the Asset or be truncated to the last significant decimal. */
  value: Scalars['String'];
}

export interface NFTData {
  /** Id of the nft ownership challenge */
  id: Scalars['NftOwnershipId'];
  /** The signature */
  signature: Scalars['Signature'];
}

export interface NFTsRequest {
  /** Chain Ids */
  chainIds: Array<Scalars['ChainId']>;
  /** Filter by contract address */
  contractAddress?: InputMaybe<Scalars['ContractAddress']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Filter by owner address */
  ownerAddress: Scalars['EthereumAddress'];
}

export interface NftOwnershipChallenge {
  /** Chain Id */
  chainId: Scalars['ChainId'];
  /** ContractAddress for nft */
  contractAddress: Scalars['ContractAddress'];
  /** Token id for NFT */
  tokenId: Scalars['String'];
}

export interface NftOwnershipChallengeRequest {
  /** The wallet address which owns the NFT */
  ethereumAddress: Scalars['EthereumAddress'];
  nfts: Array<NftOwnershipChallenge>;
}

export interface NotificationRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface PendingApprovalFollowsRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
}

export interface ProfileFollowModuleBeenRedeemedRequest {
  followProfileId: Scalars['ProfileId'];
  redeemingProfileId: Scalars['ProfileId'];
}

export interface ProfileFollowModuleRedeemParams {
  /** The profile id to use to follow this profile */
  profileId: Scalars['ProfileId'];
}

export interface ProfileFollowRevenueQueryRequest {
  /** The profile id */
  profileId: Scalars['ProfileId'];
}

export interface ProfileOnChainIdentityRequest {
  profileIds: Array<Scalars['ProfileId']>;
}

export interface ProfilePublicationRevenueQueryRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The revenue types */
  types?: InputMaybe<Array<PublicationTypes | `${PublicationTypes}`>>;
}

export interface ProfilePublicationsForSaleRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface ProfileQueryRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  /** The handles for the profile */
  handles?: InputMaybe<Array<Scalars['Handle']>>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The ethereum addresses */
  ownedBy?: InputMaybe<Array<Scalars['EthereumAddress']>>;
  /** The profile ids */
  profileIds?: InputMaybe<Array<Scalars['ProfileId']>>;
  /** The mirrored publication id */
  whoMirroredPublicationId?: InputMaybe<Scalars['InternalPublicationId']>;
}

/** profile sort criteria */
export type ProfileSortCriteria =
  | 'CREATED_ON'
  | 'LATEST_CREATED'
  | 'MOST_COLLECTS'
  | 'MOST_COMMENTS'
  | 'MOST_FOLLOWERS'
  | 'MOST_MIRRORS'
  | 'MOST_POSTS'
  | 'MOST_PUBLICATION';

/** publication metadata status type */
export type PublicationMetadataStatusType =
  | 'METADATA_VALIDATION_FAILED'
  | 'PENDING'
  | 'SUCCESS';

export interface PublicationQueryRequest {
  /** The publication id */
  publicationId?: InputMaybe<Scalars['InternalPublicationId']>;
  /** The tx hash */
  txHash?: InputMaybe<Scalars['TxHash']>;
}

/** Publication reporting fraud subreason */
export type PublicationReportingFraudSubreason =
  | 'IMPERSONATION'
  | 'SCAM';

/** Publication reporting illegal subreason */
export type PublicationReportingIllegalSubreason =
  | 'ANIMAL_ABUSE'
  | 'HUMAN_ABUSE';

/** Publication reporting reason */
export type PublicationReportingReason =
  | 'FRAUD'
  | 'ILLEGAL'
  | 'SENSITIVE';

/** Publication reporting sensitive subreason */
export type PublicationReportingSensitiveSubreason =
  | 'NSFW'
  | 'OFFENSIVE';

export interface PublicationRevenueQueryRequest {
  /** The publication id */
  publicationId: Scalars['InternalPublicationId'];
}

/** Publication sort criteria */
export type PublicationSortCriteria =
  | 'LATEST'
  | 'TOP_COLLECTED'
  | 'TOP_COMMENTED'
  | 'TOP_MIRRORED';

/** The publication types */
export type PublicationTypes =
  | 'COMMENT'
  | 'MIRROR'
  | 'POST';

export interface PublicationsQueryRequest {
  /** The ethereum address */
  collectedBy?: InputMaybe<Scalars['EthereumAddress']>;
  /** The publication id you wish to get comments for */
  commentsOf?: InputMaybe<Scalars['InternalPublicationId']>;
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
  /** The publication id */
  publicationIds?: InputMaybe<Array<Scalars['InternalPublicationId']>>;
  /** The publication types you want to query */
  publicationTypes?: InputMaybe<Array<PublicationTypes | `${PublicationTypes}`>>;
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
}

export interface ReactionFieldResolverRequest {
  /** Profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
}

export interface ReactionRequest {
  /** Profile id to perform the action */
  profileId: Scalars['ProfileId'];
  /** The internal publication id */
  publicationId: Scalars['InternalPublicationId'];
  /** The reaction */
  reaction: ReactionTypes | `${ReactionTypes}`;
}

/** Reaction types */
export type ReactionTypes =
  | 'DOWNVOTE'
  | 'UPVOTE';

export interface ReferenceModuleParams {
  /** The follower only reference module */
  followerOnlyReferenceModule?: InputMaybe<Scalars['Boolean']>;
}

/** The reference module types */
export type ReferenceModules =
  | 'FollowerOnlyReferenceModule';

/** The refresh request */
export interface RefreshRequest {
  /** The refresh token */
  refreshToken: Scalars['Jwt'];
}

/** Relay error reason */
export type RelayErrorReasons =
  | 'EXPIRED'
  | 'HANDLE_TAKEN'
  | 'NOT_ALLOWED'
  | 'REJECTED'
  | 'WRONG_WALLET_SIGNED';

export interface ReportPublicationRequest {
  additionalComments?: InputMaybe<Scalars['String']>;
  publicationId: Scalars['InternalPublicationId'];
  reason: ReportingReasonInputParams;
}

export interface ReportingReasonInputParams {
  fraudReason?: InputMaybe<FraudReasonInputParams>;
  illegalReason?: InputMaybe<IllegalReasonInputParams>;
  sensitiveReason?: InputMaybe<SensitiveReasonInputParams>;
}

export interface SearchQueryRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The search term */
  query: Scalars['Search'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  type: SearchRequestTypes | `${SearchRequestTypes}`;
}

/** Search request types */
export type SearchRequestTypes =
  | 'PROFILE'
  | 'PUBLICATION';

export interface SensitiveReasonInputParams {
  reason: PublicationReportingReason | `${PublicationReportingReason}`;
  subreason: PublicationReportingSensitiveSubreason | `${PublicationReportingSensitiveSubreason}`;
}

export interface SetDispatcherRequest {
  /** The dispatcher address - they can post, comment, mirror, set follow module, change your profile picture on your behalf. */
  dispatcher?: InputMaybe<Scalars['EthereumAddress']>;
  /** If you want to enable or disable it */
  enable?: InputMaybe<Scalars['Boolean']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
}

/** The signed auth challenge */
export interface SignedAuthChallenge {
  /** The ethereum address you signed the signature with */
  address: Scalars['EthereumAddress'];
  /** The signature */
  signature: Scalars['Signature'];
}

export interface SingleProfileQueryRequest {
  /** The handle for the profile */
  handle?: InputMaybe<Scalars['Handle']>;
  /** The profile id */
  profileId?: InputMaybe<Scalars['ProfileId']>;
}

export interface TimedFeeCollectModuleParams {
  /** The collect module amount info */
  amount: ModuleFeeAmountParams;
  /** Follower only */
  followerOnly: Scalars['Boolean'];
  /** The collect module recipient address */
  recipient: Scalars['EthereumAddress'];
  /** The collect module referral fee */
  referralFee: Scalars['Float'];
}

export interface TimelineRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** The profile id */
  profileId: Scalars['ProfileId'];
  /** The App Id */
  sources?: InputMaybe<Array<Scalars['Sources']>>;
  /** The timeline types you wish to include, if nothing passed in will bring back all */
  timelineTypes?: InputMaybe<Array<TimelineType | `${TimelineType}`>>;
}

/** Timeline types */
export type TimelineType =
  | 'COLLECT_COMMENT'
  | 'COLLECT_POST'
  | 'COMMENT'
  | 'MIRROR'
  | 'POST';

/** Transaction error reason */
export type TransactionErrorReasons =
  | 'REVERTED';

export interface TypedDataOptions {
  /** If you wish to override the nonce for the sig if you want to do some clever stuff in the client */
  overrideSigNonce: Scalars['Nonce'];
}

export interface UnfollowRequest {
  profile: Scalars['ProfileId'];
}

export interface UpdateProfileImageRequest {
  /** The nft data */
  nftData?: InputMaybe<NFTData>;
  profileId: Scalars['ProfileId'];
  /** The url to the image if offline */
  url?: InputMaybe<Scalars['Url']>;
}

/** The access request */
export interface VerifyRequest {
  /** The access token */
  accessToken: Scalars['Jwt'];
}

export interface WhoCollectedPublicationRequest {
  cursor?: InputMaybe<Scalars['Cursor']>;
  limit?: InputMaybe<Scalars['LimitScalar']>;
  /** Internal publication id */
  publicationId: Scalars['InternalPublicationId'];
}

export type AuthenticateChallengeVariables = Exact<{
  request: SignedAuthChallenge;
}>;


export type AuthenticateChallenge = { authenticate: { accessToken: string, refreshToken: string } };

export type GetChallengeVariables = Exact<{
  address: Scalars['EthereumAddress'];
}>;


export type GetChallenge = { challenge: { text: string } };
