/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Annotation } from './Annotation';
import { CodeableConcept } from './CodeableConcept';
import { Dosage } from './Dosage';
import { Duration } from './Duration';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';

/**
 * An order or request for both supply of the medication and the
 * instructions for administration of the medication to a patient. The
 * resource is called &quot;MedicationRequest&quot; rather than
 * &quot;MedicationPrescription&quot; or &quot;MedicationOrder&quot; to generalize the use
 * across inpatient and outpatient settings, including care plans, etc.,
 * and to harmonize with workflow patterns.
 */
export interface MedicationRequest {

  /**
   * This is a MedicationRequest resource
   */
  readonly resourceType: 'MedicationRequest';

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
   * Identifiers associated with this medication request that are defined
   * by business processes and/or used to refer to it when a direct URL
   * reference to the resource itself is not appropriate. They are business
   * identifiers assigned to this resource by the performer or other
   * systems and remain constant as the resource is updated and propagates
   * from server to server.
   */
  readonly identifier?: Identifier[];

  /**
   * A code specifying the current state of the order.  Generally, this
   * will be active or completed state.
   */
  readonly status?: string;

  /**
   * Captures the reason for the current state of the MedicationRequest.
   */
  readonly statusReason?: CodeableConcept;

  /**
   * Whether the request is a proposal, plan, or an original order.
   */
  readonly intent?: string;

  /**
   * Indicates the type of medication request (for example, where the
   * medication is expected to be consumed or administered (i.e. inpatient
   * or outpatient)).
   */
  readonly category?: CodeableConcept[];

  /**
   * Indicates how quickly the Medication Request should be addressed with
   * respect to other requests.
   */
  readonly priority?: string;

  /**
   * If true indicates that the provider is asking for the medication
   * request not to occur.
   */
  readonly doNotPerform?: boolean;

  /**
   * Indicates if this record was captured as a secondary 'reported' record
   * rather than as an original primary source-of-truth record.  It may
   * also indicate the source of the report.
   */
  readonly reportedBoolean?: boolean;

  /**
   * Indicates if this record was captured as a secondary 'reported' record
   * rather than as an original primary source-of-truth record.  It may
   * also indicate the source of the report.
   */
  readonly reportedReference?: Reference;

  /**
   * Identifies the medication being requested. This is a link to a
   * resource that represents the medication which may be the details of
   * the medication or simply an attribute carrying a code that identifies
   * the medication from a known list of medications.
   */
  readonly medicationCodeableConcept?: CodeableConcept;

  /**
   * Identifies the medication being requested. This is a link to a
   * resource that represents the medication which may be the details of
   * the medication or simply an attribute carrying a code that identifies
   * the medication from a known list of medications.
   */
  readonly medicationReference?: Reference;

  /**
   * A link to a resource representing the person or set of individuals to
   * whom the medication will be given.
   */
  readonly subject?: Reference;

  /**
   * The Encounter during which this [x] was created or to which the
   * creation of this record is tightly associated.
   */
  readonly encounter?: Reference;

  /**
   * Include additional information (for example, patient height and
   * weight) that supports the ordering of the medication.
   */
  readonly supportingInformation?: Reference[];

  /**
   * The date (and perhaps time) when the prescription was initially
   * written or authored on.
   */
  readonly authoredOn?: Date;

  /**
   * The individual, organization, or device that initiated the request and
   * has responsibility for its activation.
   */
  readonly requester?: Reference;

  /**
   * The specified desired performer of the medication treatment (e.g. the
   * performer of the medication administration).
   */
  readonly performer?: Reference;

  /**
   * Indicates the type of performer of the administration of the
   * medication.
   */
  readonly performerType?: CodeableConcept;

  /**
   * The person who entered the order on behalf of another individual for
   * example in the case of a verbal or a telephone order.
   */
  readonly recorder?: Reference;

  /**
   * The reason or the indication for ordering or not ordering the
   * medication.
   */
  readonly reasonCode?: CodeableConcept[];

  /**
   * Condition or observation that supports why the medication was ordered.
   */
  readonly reasonReference?: Reference[];

  /**
   * The URL pointing to a protocol, guideline, orderset, or other
   * definition that is adhered to in whole or in part by this
   * MedicationRequest.
   */
  readonly instantiatesCanonical?: string[];

  /**
   * The URL pointing to an externally maintained protocol, guideline,
   * orderset or other definition that is adhered to in whole or in part by
   * this MedicationRequest.
   */
  readonly instantiatesUri?: string[];

  /**
   * A plan or request that is fulfilled in whole or in part by this
   * medication request.
   */
  readonly basedOn?: Reference[];

  /**
   * A shared identifier common to all requests that were authorized more
   * or less simultaneously by a single author, representing the identifier
   * of the requisition or prescription.
   */
  readonly groupIdentifier?: Identifier;

  /**
   * The description of the overall patte3rn of the administration of the
   * medication to the patient.
   */
  readonly courseOfTherapyType?: CodeableConcept;

  /**
   * Insurance plans, coverage extensions, pre-authorizations and/or
   * pre-determinations that may be required for delivering the requested
   * service.
   */
  readonly insurance?: Reference[];

  /**
   * Extra information about the prescription that could not be conveyed by
   * the other attributes.
   */
  readonly note?: Annotation[];

  /**
   * Indicates how the medication is to be used by the patient.
   */
  readonly dosageInstruction?: Dosage[];

  /**
   * Indicates the specific details for the dispense or medication supply
   * part of a medication request (also known as a Medication Prescription
   * or Medication Order).  Note that this information is not always sent
   * with the order.  There may be in some settings (e.g. hospitals)
   * institutional or system support for completing the dispense details in
   * the pharmacy department.
   */
  readonly dispenseRequest?: MedicationRequestDispenseRequest;

  /**
   * Indicates whether or not substitution can or should be part of the
   * dispense. In some cases, substitution must happen, in other cases
   * substitution must not happen. This block explains the prescriber's
   * intent. If nothing is specified substitution may be done.
   */
  readonly substitution?: MedicationRequestSubstitution;

  /**
   * A link to a resource representing an earlier order related order or
   * prescription.
   */
  readonly priorPrescription?: Reference;

  /**
   * Indicates an actual or potential clinical issue with or between one or
   * more active or proposed clinical actions for a patient; e.g. Drug-drug
   * interaction, duplicate therapy, dosage alert etc.
   */
  readonly detectedIssue?: Reference[];

  /**
   * Links to Provenance records for past versions of this resource or
   * fulfilling request or event resources that identify key state
   * transitions or updates that are likely to be relevant to a user
   * looking at the current version of the resource.
   */
  readonly eventHistory?: Reference[];
}

/**
 * An order or request for both supply of the medication and the
 * instructions for administration of the medication to a patient. The
 * resource is called &quot;MedicationRequest&quot; rather than
 * &quot;MedicationPrescription&quot; or &quot;MedicationOrder&quot; to generalize the use
 * across inpatient and outpatient settings, including care plans, etc.,
 * and to harmonize with workflow patterns.
 */
export interface MedicationRequestDispenseRequest {

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
   * Indicates the quantity or duration for the first dispense of the
   * medication.
   */
  readonly initialFill?: MedicationRequestInitialFill;

  /**
   * The minimum period of time that must occur between dispenses of the
   * medication.
   */
  readonly dispenseInterval?: Duration;

  /**
   * This indicates the validity period of a prescription (stale dating the
   * Prescription).
   */
  readonly validityPeriod?: Period;

  /**
   * An integer indicating the number of times, in addition to the original
   * dispense, (aka refills or repeats) that the patient can receive the
   * prescribed medication. Usage Notes: This integer does not include the
   * original order dispense. This means that if an order indicates
   * dispense 30 tablets plus &quot;3 repeats&quot;, then the order can be dispensed
   * a total of 4 times and the patient can receive a total of 120 tablets.
   * A prescriber may explicitly say that zero refills are permitted after
   * the initial dispense.
   */
  readonly numberOfRepeatsAllowed?: number;

  /**
   * The amount that is to be dispensed for one fill.
   */
  readonly quantity?: Quantity;

  /**
   * Identifies the period time over which the supplied product is expected
   * to be used, or the length of time the dispense is expected to last.
   */
  readonly expectedSupplyDuration?: Duration;

  /**
   * Indicates the intended dispensing Organization specified by the
   * prescriber.
   */
  readonly performer?: Reference;
}

/**
 * An order or request for both supply of the medication and the
 * instructions for administration of the medication to a patient. The
 * resource is called &quot;MedicationRequest&quot; rather than
 * &quot;MedicationPrescription&quot; or &quot;MedicationOrder&quot; to generalize the use
 * across inpatient and outpatient settings, including care plans, etc.,
 * and to harmonize with workflow patterns.
 */
export interface MedicationRequestInitialFill {

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
   * The amount or quantity to provide as part of the first dispense.
   */
  readonly quantity?: Quantity;

  /**
   * The length of time that the first dispense is expected to last.
   */
  readonly duration?: Duration;
}

/**
 * An order or request for both supply of the medication and the
 * instructions for administration of the medication to a patient. The
 * resource is called &quot;MedicationRequest&quot; rather than
 * &quot;MedicationPrescription&quot; or &quot;MedicationOrder&quot; to generalize the use
 * across inpatient and outpatient settings, including care plans, etc.,
 * and to harmonize with workflow patterns.
 */
export interface MedicationRequestSubstitution {

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
   * True if the prescriber allows a different drug to be dispensed from
   * what was prescribed.
   */
  readonly allowedBoolean?: boolean;

  /**
   * True if the prescriber allows a different drug to be dispensed from
   * what was prescribed.
   */
  readonly allowedCodeableConcept?: CodeableConcept;

  /**
   * Indicates the reason for the substitution, or why substitution must or
   * must not be performed.
   */
  readonly reason?: CodeableConcept;
}