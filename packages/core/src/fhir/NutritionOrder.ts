/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Quantity } from './Quantity';
import { Ratio } from './Ratio';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { Timing } from './Timing';

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrder {

  /**
   * This is a NutritionOrder resource
   */
  readonly resourceType: 'NutritionOrder';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Identifiers assigned to this order by the order sender or by the order
   * receiver.
   */
  readonly identifier?: Identifier[];

  /**
   * The URL pointing to a FHIR-defined protocol, guideline, orderset or
   * other definition that is adhered to in whole or in part by this
   * NutritionOrder.
   */
  readonly instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this NutritionOrder.
   */
  readonly instantiatesUri?: string[];

  /**
   * The URL pointing to a protocol, guideline, orderset or other
   * definition that is adhered to in whole or in part by this
   * NutritionOrder.
   */
  readonly instantiates?: string[];

  /**
   * The workflow status of the nutrition order/request.
   */
  readonly status?: string;

  /**
   * Indicates the level of authority/intentionality associated with the
   * NutrionOrder and where the request fits into the workflow chain.
   */
  readonly intent?: string;

  /**
   * The person (patient) who needs the nutrition order for an oral diet,
   * nutritional supplement and/or enteral or formula feeding.
   */
  readonly patient?: Reference;

  /**
   * An encounter that provides additional information about the healthcare
   * context in which this request is made.
   */
  readonly encounter?: Reference;

  /**
   * The date and time that this nutrition order was requested.
   */
  readonly dateTime?: Date;

  /**
   * The practitioner that holds legal responsibility for ordering the
   * diet, nutritional supplement, or formula feedings.
   */
  readonly orderer?: Reference;

  /**
   * A link to a record of allergies or intolerances  which should be
   * included in the nutrition order.
   */
  readonly allergyIntolerance?: Reference[];

  /**
   * This modifier is used to convey order-specific modifiers about the
   * type of food that should be given. These can be derived from patient
   * allergies, intolerances, or preferences such as Halal, Vegan or
   * Kosher. This modifier applies to the entire nutrition order inclusive
   * of the oral diet, nutritional supplements and enteral formula
   * feedings.
   */
  readonly foodPreferenceModifier?: CodeableConcept[];

  /**
   * This modifier is used to convey Order-specific modifier about the type
   * of oral food or oral fluids that should not be given. These can be
   * derived from patient allergies, intolerances, or preferences such as
   * No Red Meat, No Soy or No Wheat or  Gluten-Free.  While it should not
   * be necessary to repeat allergy or intolerance information captured in
   * the referenced AllergyIntolerance resource in the excludeFoodModifier,
   * this element may be used to convey additional specificity related to
   * foods that should be eliminated from the patient&rsquo;s diet for any
   * reason.  This modifier applies to the entire nutrition order inclusive
   * of the oral diet, nutritional supplements and enteral formula
   * feedings.
   */
  readonly excludeFoodModifier?: CodeableConcept[];

  /**
   * Diet given orally in contrast to enteral (tube) feeding.
   */
  readonly oralDiet?: NutritionOrderOralDiet;

  /**
   * Oral nutritional products given in order to add further nutritional
   * value to the patient's diet.
   */
  readonly supplement?: NutritionOrderSupplement[];

  /**
   * Feeding provided through the gastrointestinal tract via a tube,
   * catheter, or stoma that delivers nutrition distal to the oral cavity.
   */
  readonly enteralFormula?: NutritionOrderEnteralFormula;

  /**
   * Comments made about the {{title}} by the requester, performer, subject
   * or other participants.
   */
  readonly note?: Annotation[];
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderAdministration {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The time period and frequency at which the enteral formula should be
   * delivered to the patient.
   */
  readonly schedule?: Timing;

  /**
   * The volume of formula to provide to the patient per the specified
   * administration schedule.
   */
  readonly quantity?: Quantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL
   * per hour, according to the specified schedule.
   */
  readonly rateQuantity?: Quantity;

  /**
   * The rate of administration of formula via a feeding pump, e.g. 60 mL
   * per hour, according to the specified schedule.
   */
  readonly rateRatio?: Ratio;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderEnteralFormula {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The type of enteral or infant formula such as an adult standard
   * formula with fiber or a soy-based infant formula.
   */
  readonly baseFormulaType?: CodeableConcept;

  /**
   * The product or brand name of the enteral or infant formula product
   * such as &quot;ACME Adult Standard Formula&quot;.
   */
  readonly baseFormulaProductName?: string;

  /**
   * Indicates the type of modular component such as protein, carbohydrate,
   * fat or fiber to be provided in addition to or mixed with the base
   * formula.
   */
  readonly additiveType?: CodeableConcept;

  /**
   * The product or brand name of the type of modular component to be added
   * to the formula.
   */
  readonly additiveProductName?: string;

  /**
   * The amount of energy (calories) that the formula should provide per
   * specified volume, typically per mL or fluid oz.  For example, an
   * infant may require a formula that provides 24 calories per fluid ounce
   * or an adult may require an enteral formula that provides 1.5
   * calorie/mL.
   */
  readonly caloricDensity?: Quantity;

  /**
   * The route or physiological path of administration into the patient's
   * gastrointestinal  tract for purposes of providing the formula feeding,
   * e.g. nasogastric tube.
   */
  readonly routeofAdministration?: CodeableConcept;

  /**
   * Formula administration instructions as structured data.  This
   * repeating structure allows for changing the administration rate or
   * volume over time for both bolus and continuous feeding.  An example of
   * this would be an instruction to increase the rate of continuous
   * feeding every 2 hours.
   */
  readonly administration?: NutritionOrderAdministration[];

  /**
   * The maximum total quantity of formula that may be administered to a
   * subject over the period of time, e.g. 1440 mL over 24 hours.
   */
  readonly maxVolumeToDeliver?: Quantity;

  /**
   * Free text formula administration, feeding instructions or additional
   * instructions or information.
   */
  readonly administrationInstruction?: string;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderNutrient {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The nutrient that is being modified such as carbohydrate or sodium.
   */
  readonly modifier?: CodeableConcept;

  /**
   * The quantity of the specified nutrient to include in diet.
   */
  readonly amount?: Quantity;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderOralDiet {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The kind of diet or dietary restriction such as fiber restricted diet
   * or diabetic diet.
   */
  readonly type?: CodeableConcept[];

  /**
   * The time period and frequency at which the diet should be given.  The
   * diet should be given for the combination of all schedules if more than
   * one schedule is present.
   */
  readonly schedule?: Timing[];

  /**
   * Class that defines the quantity and type of nutrient modifications
   * (for example carbohydrate, fiber or sodium) required for the oral
   * diet.
   */
  readonly nutrient?: NutritionOrderNutrient[];

  /**
   * Class that describes any texture modifications required for the
   * patient to safely consume various types of solid foods.
   */
  readonly texture?: NutritionOrderTexture[];

  /**
   * The required consistency (e.g. honey-thick, nectar-thick, thin,
   * thickened.) of liquids or fluids served to the patient.
   */
  readonly fluidConsistencyType?: CodeableConcept[];

  /**
   * Free text or additional instructions or information pertaining to the
   * oral diet.
   */
  readonly instruction?: string;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderSupplement {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The kind of nutritional supplement product required such as a high
   * protein or pediatric clear liquid supplement.
   */
  readonly type?: CodeableConcept;

  /**
   * The product or brand name of the nutritional supplement such as &quot;Acme
   * Protein Shake&quot;.
   */
  readonly productName?: string;

  /**
   * The time period and frequency at which the supplement(s) should be
   * given.  The supplement should be given for the combination of all
   * schedules if more than one schedule is present.
   */
  readonly schedule?: Timing[];

  /**
   * The amount of the nutritional supplement to be given.
   */
  readonly quantity?: Quantity;

  /**
   * Free text or additional instructions or information pertaining to the
   * oral supplement.
   */
  readonly instruction?: string;
}

/**
 * A request to supply a diet, formula feeding (enteral) or oral
 * nutritional supplement to a patient/resident.
 */
export interface NutritionOrderTexture {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * Any texture modifications (for solid foods) that should be made, e.g.
   * easy to chew, chopped, ground, and pureed.
   */
  readonly modifier?: CodeableConcept;

  /**
   * The food type(s) (e.g. meats, all foods)  that the texture
   * modification applies to.  This could be all foods types.
   */
  readonly foodType?: CodeableConcept;
}