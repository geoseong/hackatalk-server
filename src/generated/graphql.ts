import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { MyContext } from '../context';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export enum AuthType {
  Email = 'email',
  Facebook = 'facebook',
  Google = 'google',
  Apple = 'apple'
}

export type Channel = {
  __typename?: 'Channel';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  memberships?: Maybe<Array<Maybe<Membership>>>;
  messages?: Maybe<Array<Maybe<Message>>>;
  myMembership?: Maybe<Membership>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ChannelType>;
  updatedAt: Scalars['DateTime'];
};

export type ChannelInput = {
  friendIds: Array<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<ChannelType>;
};

export enum ChannelType {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}



export type FriendPayload = {
  __typename?: 'FriendPayload';
  added?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Int']>;
  user: User;
};

export type FriendSub = {
  __typename?: 'FriendSub';
  action?: Maybe<FriendSubAction>;
  user?: Maybe<User>;
};

export enum FriendSubAction {
  Added = 'ADDED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type Gallery = {
  __typename?: 'Gallery';
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  photoURL: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export enum Gender {
  Male = 'MALE',
  Female = 'FEMALE'
}

export type Membership = {
  __typename?: 'Membership';
  id: Scalars['ID'];
  channel?: Maybe<Channel>;
  user?: Maybe<User>;
  type?: Maybe<MemberType>;
  userAlert?: Maybe<Scalars['Boolean']>;
  userMode?: Maybe<UserModeType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export enum MemberType {
  Owner = 'OWNER',
  Member = 'MEMBER'
}

export type Message = {
  __typename?: 'Message';
  channel?: Maybe<Channel>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  filePath?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  picture?: Maybe<Array<Maybe<Photo>>>;
  reactions?: Maybe<Array<Maybe<Reaction>>>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  sender?: Maybe<User>;
  text?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MessagePayload = {
  __typename?: 'MessagePayload';
  channelId: Scalars['String'];
  message?: Maybe<Message>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFriend?: Maybe<FriendPayload>;
  addNotificationToken?: Maybe<Notification>;
  changeEmailPassword?: Maybe<Scalars['Boolean']>;
  /** `friendIds` in Channel should exclude userid. */
  createChannel?: Maybe<Channel>;
  createGallery?: Maybe<Gallery>;
  /**
   * Create message and return channelId when meessage has successfully sent.
   * Do not pass current userId inside `users`.
   */
  createMessage?: Maybe<MessagePayload>;
  createReaction?: Maybe<Reaction>;
  deleteChannel?: Maybe<Scalars['Int']>;
  deleteFriend?: Maybe<FriendPayload>;
  deleteGallery?: Maybe<Scalars['Int']>;
  deleteReaction?: Maybe<Scalars['Int']>;
  findPassword?: Maybe<Scalars['Boolean']>;
  removeNotificationToken?: Maybe<Scalars['Int']>;
  sendVerification?: Maybe<Scalars['Boolean']>;
  setOnlineStatus?: Maybe<Scalars['Int']>;
  signInEmail: AuthPayload;
  signInWithFacebook: AuthPayload;
  signInWithSocialAccount: AuthPayload;
  signUp: AuthPayload;
  singleUpload: Scalars['String'];
  updateChannel?: Maybe<Scalars['Int']>;
  updateGallery?: Maybe<Scalars['Int']>;
  updateProfile?: Maybe<User>;
};


export type MutationAddFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationAddNotificationTokenArgs = {
  notification: NotificationCreateInput;
};


export type MutationChangeEmailPasswordArgs = {
  newPassword: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateChannelArgs = {
  channel?: Maybe<ChannelInput>;
};


export type MutationCreateGalleryArgs = {
  photoURL: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  channelId: Scalars['String'];
  message: Scalars['String'];
};


export type MutationCreateReactionArgs = {
  messageId: Scalars['ID'];
  type: Scalars['String'];
};


export type MutationDeleteChannelArgs = {
  channelId: Scalars['ID'];
};


export type MutationDeleteFriendArgs = {
  friendId: Scalars['ID'];
};


export type MutationDeleteGalleryArgs = {
  galleryId: Scalars['ID'];
};


export type MutationDeleteReactionArgs = {
  reactionId: Scalars['ID'];
};


export type MutationFindPasswordArgs = {
  email: Scalars['String'];
};


export type MutationRemoveNotificationTokenArgs = {
  token: Scalars['String'];
};


export type MutationSendVerificationArgs = {
  email: Scalars['String'];
};


export type MutationSetOnlineStatusArgs = {
  isOnline?: Maybe<Scalars['Boolean']>;
};


export type MutationSignInEmailArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignInWithFacebookArgs = {
  accessToken: Scalars['String'];
};


export type MutationSignInWithSocialAccountArgs = {
  socialUser: SocialUserInput;
};


export type MutationSignUpArgs = {
  user: UserInput;
};


export type MutationSingleUploadArgs = {
  dir?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationUpdateChannelArgs = {
  channel?: Maybe<ChannelInput>;
};


export type MutationUpdateGalleryArgs = {
  galleryId: Scalars['ID'];
  photoURL: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  user: UserProfileInput;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt?: Maybe<Scalars['DateTime']>;
  device?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  os?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type NotificationCreateInput = {
  device?: Maybe<Scalars['String']>;
  os?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['String'];
  thumbURL?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  channels: Array<Channel>;
  friends: Array<User>;
  galleries: Array<Gallery>;
  me?: Maybe<User>;
  messages: Array<Message>;
  user?: Maybe<User>;
  /**
   * If filter is true, it will filter user with email, nickname or name.
   * You can add pagination with first and after args.
   */
  users?: Maybe<UsersConnection>;
};


export type QueryGalleriesArgs = {
  userId: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['Boolean']>;
  first?: Maybe<Scalars['Int']>;
  includeUser?: Maybe<Scalars['Boolean']>;
  last?: Maybe<Scalars['Int']>;
  user?: Maybe<UserQueryInput>;
};

export type Reaction = {
  __typename?: 'Reaction';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  type?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Reply = {
  __typename?: 'Reply';
  id: Scalars['String'];
  sender?: Maybe<User>;
  type?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  filePath?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Maybe<Reply>>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
};

export type SocialUserInput = {
  authType: AuthType;
  birthday?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  socialId: Scalars['String'];
  thumbURL?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  friendChanged?: Maybe<FriendSub>;
  userSignedIn?: Maybe<User>;
  userUpdated?: Maybe<User>;
};


export type SubscriptionFriendChangedArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionUserSignedInArgs = {
  userId: Scalars['ID'];
};


export type SubscriptionUserUpdatedArgs = {
  userId: Scalars['ID'];
};


export type User = {
  __typename?: 'User';
  authType?: Maybe<AuthType>;
  birthday?: Maybe<Scalars['Date']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  id: Scalars['ID'];
  isOnline?: Maybe<Scalars['Boolean']>;
  lastSignedIn?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  notifications?: Maybe<Array<Maybe<Notification>>>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  socialId?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
  thumbURL?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  node?: Maybe<User>;
  cursor?: Maybe<Scalars['String']>;
};

export type UserInput = {
  birthday?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  gender?: Maybe<Gender>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
};

export enum UserModeType {
  Default = 'DEFAULT',
  Hidden = 'HIDDEN',
  Block = 'BLOCK'
}

export type UserProfileInput = {
  birthday?: Maybe<Scalars['Date']>;
  gender?: Maybe<Gender>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  photoURL?: Maybe<Scalars['String']>;
  statusMessage?: Maybe<Scalars['String']>;
  thumbURL?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  birthday?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  name?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

/**
 * Simple wrapper around our list of launches that contains a cursor to the
 * last item in the list. Pass this cursor to the launches query to fetch results
 * after these.
 */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Channel: ResolverTypeWrapper<Channel>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Membership: ResolverTypeWrapper<Membership>;
  User: ResolverTypeWrapper<User>;
  AuthType: AuthType;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Gender: Gender;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Notification: ResolverTypeWrapper<Notification>;
  MemberType: MemberType;
  UserModeType: UserModeType;
  Message: ResolverTypeWrapper<Message>;
  Photo: ResolverTypeWrapper<Photo>;
  Reaction: ResolverTypeWrapper<Reaction>;
  Reply: ResolverTypeWrapper<Reply>;
  ChannelType: ChannelType;
  Gallery: ResolverTypeWrapper<Gallery>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  UserQueryInput: UserQueryInput;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  Mutation: ResolverTypeWrapper<{}>;
  FriendPayload: ResolverTypeWrapper<FriendPayload>;
  NotificationCreateInput: NotificationCreateInput;
  ChannelInput: ChannelInput;
  MessagePayload: ResolverTypeWrapper<MessagePayload>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  UserProfileInput: UserProfileInput;
  Subscription: ResolverTypeWrapper<{}>;
  FriendSub: ResolverTypeWrapper<FriendSub>;
  FriendSubAction: FriendSubAction;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Channel: Channel;
  DateTime: Scalars['DateTime'];
  ID: Scalars['ID'];
  Membership: Membership;
  User: User;
  Date: Scalars['Date'];
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  Notification: Notification;
  Message: Message;
  Photo: Photo;
  Reaction: Reaction;
  Reply: Reply;
  Gallery: Gallery;
  Int: Scalars['Int'];
  UserQueryInput: UserQueryInput;
  UsersConnection: UsersConnection;
  UserEdge: UserEdge;
  PageInfo: PageInfo;
  Mutation: {};
  FriendPayload: FriendPayload;
  NotificationCreateInput: NotificationCreateInput;
  ChannelInput: ChannelInput;
  MessagePayload: MessagePayload;
  AuthPayload: AuthPayload;
  SocialUserInput: SocialUserInput;
  UserInput: UserInput;
  Upload: Scalars['Upload'];
  UserProfileInput: UserProfileInput;
  Subscription: {};
  FriendSub: FriendSub;
};

export type AuthPayloadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ChannelResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Channel'] = ResolversParentTypes['Channel']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  memberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Membership']>>>, ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Message']>>>, ParentType, ContextType>;
  myMembership?: Resolver<Maybe<ResolversTypes['Membership']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ChannelType']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type FriendPayloadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['FriendPayload'] = ResolversParentTypes['FriendPayload']> = {
  added?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FriendSubResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['FriendSub'] = ResolversParentTypes['FriendSub']> = {
  action?: Resolver<Maybe<ResolversTypes['FriendSubAction']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type GalleryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Gallery'] = ResolversParentTypes['Gallery']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  photoURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MembershipResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Membership'] = ResolversParentTypes['Membership']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  channel?: Resolver<Maybe<ResolversTypes['Channel']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['MemberType']>, ParentType, ContextType>;
  userAlert?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  userMode?: Resolver<Maybe<ResolversTypes['UserModeType']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessageResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  channel?: Resolver<Maybe<ResolversTypes['Channel']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  filePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  reactions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reaction']>>>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reply']>>>, ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MessagePayloadResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['MessagePayload'] = ResolversParentTypes['MessagePayload']> = {
  channelId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['Message']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addFriend?: Resolver<Maybe<ResolversTypes['FriendPayload']>, ParentType, ContextType, RequireFields<MutationAddFriendArgs, 'friendId'>>;
  addNotificationToken?: Resolver<Maybe<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationAddNotificationTokenArgs, 'notification'>>;
  changeEmailPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationChangeEmailPasswordArgs, 'newPassword' | 'password'>>;
  createChannel?: Resolver<Maybe<ResolversTypes['Channel']>, ParentType, ContextType, RequireFields<MutationCreateChannelArgs, never>>;
  createGallery?: Resolver<Maybe<ResolversTypes['Gallery']>, ParentType, ContextType, RequireFields<MutationCreateGalleryArgs, 'photoURL'>>;
  createMessage?: Resolver<Maybe<ResolversTypes['MessagePayload']>, ParentType, ContextType, RequireFields<MutationCreateMessageArgs, 'channelId' | 'message'>>;
  createReaction?: Resolver<Maybe<ResolversTypes['Reaction']>, ParentType, ContextType, RequireFields<MutationCreateReactionArgs, 'messageId' | 'type'>>;
  deleteChannel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteChannelArgs, 'channelId'>>;
  deleteFriend?: Resolver<Maybe<ResolversTypes['FriendPayload']>, ParentType, ContextType, RequireFields<MutationDeleteFriendArgs, 'friendId'>>;
  deleteGallery?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteGalleryArgs, 'galleryId'>>;
  deleteReaction?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDeleteReactionArgs, 'reactionId'>>;
  findPassword?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationFindPasswordArgs, 'email'>>;
  removeNotificationToken?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationRemoveNotificationTokenArgs, 'token'>>;
  sendVerification?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationSendVerificationArgs, 'email'>>;
  setOnlineStatus?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationSetOnlineStatusArgs, never>>;
  signInEmail?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInEmailArgs, 'email' | 'password'>>;
  signInWithFacebook?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInWithFacebookArgs, 'accessToken'>>;
  signInWithSocialAccount?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignInWithSocialAccountArgs, 'socialUser'>>;
  signUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'user'>>;
  singleUpload?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<MutationSingleUploadArgs, 'file'>>;
  updateChannel?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateChannelArgs, never>>;
  updateGallery?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationUpdateGalleryArgs, 'galleryId' | 'photoURL'>>;
  updateProfile?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'user'>>;
};

export type NotificationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  device?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  os?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PageInfoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  startCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  hasPreviousPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PhotoResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  channels?: Resolver<Array<ResolversTypes['Channel']>, ParentType, ContextType>;
  friends?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  galleries?: Resolver<Array<ResolversTypes['Gallery']>, ParentType, ContextType, RequireFields<QueryGalleriesArgs, 'userId'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  messages?: Resolver<Array<ResolversTypes['Message']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryUsersArgs, never>>;
};

export type ReactionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Reaction'] = ResolversParentTypes['Reaction']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type ReplyResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Reply'] = ResolversParentTypes['Reply']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  filePath?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  replies?: Resolver<Maybe<Array<Maybe<ResolversTypes['Reply']>>>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type SubscriptionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  friendChanged?: SubscriptionResolver<Maybe<ResolversTypes['FriendSub']>, "friendChanged", ParentType, ContextType, RequireFields<SubscriptionFriendChangedArgs, 'userId'>>;
  userSignedIn?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userSignedIn", ParentType, ContextType, RequireFields<SubscriptionUserSignedInArgs, 'userId'>>;
  userUpdated?: SubscriptionResolver<Maybe<ResolversTypes['User']>, "userUpdated", ParentType, ContextType, RequireFields<SubscriptionUserUpdatedArgs, 'userId'>>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  authType?: Resolver<Maybe<ResolversTypes['AuthType']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOnline?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastSignedIn?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  notifications?: Resolver<Maybe<Array<Maybe<ResolversTypes['Notification']>>>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  photoURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socialId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  statusMessage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  verified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UserEdgeResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  node?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  cursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type UsersConnectionResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = {
  edges?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserEdge']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PageInfo']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type Resolvers<ContextType = MyContext> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Channel?: ChannelResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  FriendPayload?: FriendPayloadResolvers<ContextType>;
  FriendSub?: FriendSubResolvers<ContextType>;
  Gallery?: GalleryResolvers<ContextType>;
  Membership?: MembershipResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  MessagePayload?: MessagePayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Reaction?: ReactionResolvers<ContextType>;
  Reply?: ReplyResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = MyContext> = Resolvers<ContextType>;
