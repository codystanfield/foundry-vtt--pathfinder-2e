declare interface ActorData extends BaseEntityData {
	img: string;
	token: any;
}

/**
 * The Collection of Actor entities.
 *
 * @see {@link Actor} The Actor entity.
 * @see {@link ActorDirectory} All Actors which exist in the world are rendered within the ActorDirectory sidebar tab.
 *
 * @example <caption>Retrieve an existing Actor by its id</caption>
 * let actor = game.actors.get(actorId);
 */
declare class Actors extends Collection<SystemActorType> {
	entities: SystemActorType[];

	/**
	 * A mapping of synthetic Token Actors which are currently active within the viewed Scene.
	 * Each Actor is referenced by the Token.id.
	 * @type {Object}
	 */
	tokens: { [tokenID: string]: SystemActorType };

	/** @override */
	get object(): SystemActorType;

	values(): IterableIterator<SystemActorType>;

	/* -------------------------------------------- */
	/*  Sheet Registration Methods                  */
	/* -------------------------------------------- */

	/**
	 * Register an Actor sheet class as a candidate which can be used to display Actors of a given type
	 * See EntitySheetConfig.registerSheet for details
	 */
	static registerSheet(...args: any): void;

	/**
	 * Unregister an Actor sheet class, removing it from the list of avaliable sheet Applications to use
	 * See EntitySheetConfig.unregisterSheet for details
	 */
	static unregisterSheet(...args: any): void;

	/**
	 * Return an Array of currently registered sheet classes for this Entity type
	 */
	static get registeredSheets(): any[];
}

/**
 * The Actor Entity which represents the protagonists, characters, enemies, and more that inhabit and take actions
 * within the World.
 *
 * @see {@link Actors} Each Actor belongs to the Actors collection.
 * @see {@link ActorSheet} Each Actor is edited using the ActorSheet application or a subclass thereof.
 * @see {@link ActorDirectory} All Actors which exist in the world are rendered within the ActorDirectory sidebar tab.
 *
 *
 * @example <caption>Create a new Actor</caption>
 * let actor = await Actor.create({
 *   name: "New Test Actor",
 *   type: "character",
 *   img: "artwork/character-profile.jpg",
 *   folder: folder.data._id,
 *   sort: 12000,
 *   data: {},
 *   token: {},
 *   items: [],
 *   flags: {}
 * });
 *
 * @example <caption>Retrieve an existing Actor</caption>
 * let actor = game.actors.get(actorId);
 */
declare class Actor extends Entity<SystemActorDataType> {

	/**
	 * A reference to a placed Token which creates a synthetic Actor
	 */
	token: Token;

	/**
	 * Construct the Array of Item instances for the Actor
	 */
	items: Collection<SystemItemType>;

	/**
	 * Cache an Array of allowed Token images if using a wildcard path
	 */
	protected _tokenImages: any[];

	/** @override */
	static get config(): {
		baseEntity: SystemActorType;
		collection: Actors;
		embeddedEntities: { OwnedItem: string };
	};

	/** @override */
	prepareData(): void;

	/** @override */
	prepareEmbeddedEntities(): void;

	/* -------------------------------------------- */
	/*  Properties                                  */
	/* -------------------------------------------- */

	/**
	 * A convenient reference to the file path of the Actor's profile image
	 */
	get img(): string;

	/**
	 * A boolean flag for whether this Actor is a player-owned character.
	 * True if any User who is not a GM has ownership rights over the Actor entity.
	 */
	get isPC(): boolean;

	/**
	 * Test whether an Actor entity is a synthetic representation of a Token (if true) or a full Entity (if false)
	 */
	get isToken(): boolean;

	/**
	 * Create a synthetic Actor using a provided Token instance
	 * If the Token data is linked, return the true Actor entity
	 * If the Token data is not linked, create a synthetic Actor using the Token's actorData override
	 * @param token
	 */
	static fromToken(token: Token): SystemActorType;

	/**
	 * Create a synthetic Token Actor instance which is used in place of an actual Actor.
	 * Cache the result in Actors.tokens.
	 * @param baseActor
	 * @param token
	 */
	static createTokenActor(baseActor: SystemActorType, token: Token): SystemActorType;

	/**
	 * Retrieve an Array of active tokens which represent this Actor in the current canvas Scene.
	 * If the canvas is not currently active, or there are no linked actors, the returned Array will be empty.
	 *
	 * @param linked	Only return tokens which are linked to the Actor. Default (false) is to return all
	 *					tokens even those which are not linked.
	 *
	 * @return			An array of tokens in the current Scene which reference this Actor.
	 */
	getActiveTokens(linked?: boolean): Token[];

	/**
	 * Get an Array of Token images which could represent this Actor
	 */
	getTokenImages(): Promise<any>;

	/**
	 * Handle how changes to a Token attribute bar are applied to the Actor.
	 * This allows for game systems to override this behavior and deploy special logic.
	 * @param attribute	The attribute path
	 * @param value		The target attribute value
	 * @param isDelta	Whether the number represents a relative change (true) or an absolute change (false)
	 * @param isBar		Whether the new value is part of an attribute bar, or just a direct value
	 */
	modifyTokenAttribute(
		attribute: string,
		value: number,
		isDelta?: boolean,
		isBar?: boolean
	): Promise<SystemActorType>;

	/* -------------------------------------------- */
	/*  Socket Listeners and Handlers
	/* -------------------------------------------- */

	/** @override */
	update(data: object, options?: object): Promise<SystemActorType>;

	/** @override */
	delete(options?: object): Promise<string>;

	/** @override */
	createEmbeddedEntity(
		embeddedName: string,
		createData: object,
		options?: object
	): Promise<SystemActorType>;

	/** @override */
	updateEmbeddedEntity(
		embeddedName: string,
		updateData: object,
		options?: object
	): Promise<SystemActorType>;

	/** @override */
	deleteEmbeddedEntity(
		embeddedName: string,
		childId: string,
		options?: object
	): Promise<SystemActorType>;

	/** @override */
	protected _onUpdate(
		data: object,
		options: object,
		userId: string,
		context: object
	): void;

	/* -------------------------------------------- */
	/* Owned Item Management
	/* -------------------------------------------- */

	/**
	 * Import a new owned Item from a compendium collection
	 * The imported Item is then added to the Actor as an owned item.
	 *
	 * @param collection	The name of the pack from which to import
	 * @param entryId		The ID of the compendium entry to import
	 */
	importItemFromCollection(collection: string, entryId: string): SystemItemType;

	/**
	 * Get an owned item by it's ID, initialized as an Item entity class
	 * @param itemId	The ID of the owned item
	 * @return			An Item class instance for that owned item or null if the itemId does not exist
	 */
	getOwnedItem(itemId: string): SystemItemType | null;

	/**
	 * Create a new item owned by this Actor.
	 * @param itemData				Data for the newly owned item
	 * @param options				Item creation options
	 * @param options.rendeSheet	Render the Item sheet for the newly created item data
	 * @return						A Promise containing the data of the newly created owned Item instance
	 */
	createOwnedItem(itemData: object[], options?: object): Promise<itemData[]|itemData>;
	createOwnedItem(itemData: Partial<SystemItemDataType>, options?: object): Promise<SystemActorDataType>;

	/**
	 * Update an owned item using provided new data
	 * @param itemData	Data for the item to update
	 * @param options	Item update options
	 * @return			A Promise resolving to the updated Item object
	 */
	updateOwnedItem(itemData: object, options?: object): Promise<SystemItemType>;

	/**
	 * @deprecated since 0.4.4 in favor of Entity.updateManyEmbeddedEntities()
	 */
	updateManyOwnedItems(data: object, options?: object): Promise<SystemItemType[]>;

	/**
	 * Delete an owned item by its id. This redirects its arguments to the deleteEmbeddedEntity method.
	 * @param itemId	The ID of the item to delete
	 * @param options	Item deletion options
	 * @return			A Promise resolving to the deleted Owned Item data
	 */
	deleteOwnedItem(itemId: string[], options?: object): Promise<SystemItemType[]|SystemItemType>;
	deleteOwnedItem(itemId: string, options?: object): Promise<SystemItemType>;
}
