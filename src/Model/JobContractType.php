<?php

declare(strict_types=1);

namespace App\Model;

use Elao\Enum\AutoDiscoveredValuesTrait;
use Elao\Enum\ReadableEnum;

/**
 * @method static JobContractType CDI()
 * @method static JobContractType CDD()
 * @method static JobContractType INTERNSHIP()
 */
class JobContractType extends ReadableEnum
{
    use AutoDiscoveredValuesTrait;

    public const CDI = 'CDI';
    public const CDD = 'CDD';
    public const INTERNSHIP = 'INTERNSHIP';

    public static function readables(): array
    {
        return [
            self::CDI => 'CDI',
            self::CDD => 'CDD',
            self::INTERNSHIP => 'Stage',
        ];
    }
}
